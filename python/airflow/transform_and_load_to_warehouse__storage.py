from tempfile import NamedTemporaryFile

from airflow import DAG
from airflow.datasets import Dataset
from airflow.decorators import task
from airflow.models import Variable
from airflow.operators.empty import EmptyOperator
from airflow.providers.google.cloud.hooks.gcs import GCSHook
from airflow.providers.google.cloud.transfers.gcs_to_bigquery import (
    GCSToBigQueryOperator,
)
from airflow.utils import timezone


doc_md = """
## 🛸 Transform and Load to Warehouse

A data pipeline to download data from raw zone then transform to .parquet format then upload to cleaned zone
and load to BigQuery.

### Prerequisites

#### Connections

1. **bigquery_storage_airflow** [conn_type=`Google Cloud`, keyfile_json=`YOUR_SERVICE_ACCOUNT_JSON`]

#### Variables

1. **pudp_raw_bucket** [type=`text`, ex=`pudp-raw-dev`]
1. **pudp_cleaned_bucket** [type=`text`, ex=`pudp-cleaned-dev`]
1. **storage_table_id** [type=`text`, ex=`dev.storage_raw`]
"""

LOGS_FOLDER = "/opt/airflow/logs"
TABLE_NAME = "dev.storage"

FILENAME = "d_storage_loc_poc.txt"
DATASET = Dataset(f"gcs://pudp-raw/{FILENAME}")

with DAG(
    "transform_and_load_to_warehouse__storage",
    catchup=False,
    doc_md=doc_md,
    schedule=[DATASET],
    start_date=timezone.datetime(2023, 5, 21),
):
    start = EmptyOperator(task_id="start")

    @task
    def download_file_from_raw_zone(**kwargs) -> str:
        ds = kwargs["data_interval_start"].to_date_string()
        raw_bucket = Variable.get("pudp_raw_bucket")

        hook = GCSHook(gcp_conn_id="bigquery_storage_airflow")
        with NamedTemporaryFile("w", delete=False) as temp_file:
            hook.download(
                bucket_name=raw_bucket,
                object_name=f"{ds}/{FILENAME}",
                filename=temp_file.name,
            )

        return temp_file.name

    download_file_from_raw_zone_task = download_file_from_raw_zone()

    @task
    def measure_data_quality(file: str):
        import pandas as pd

        df = pd.read_csv(file, delimiter="|")

        total_rec = df.iloc[-1, 2]
        print(total_rec)

        data_df = df.drop(df.index[-1])
        record_count = len(data_df)

        if record_count != total_rec:
            print("Failed")
            return False
        else:
            print("Pass")
            return True

    measure_data_quality_task = measure_data_quality(download_file_from_raw_zone_task)

    @task
    def transform_to_parquet(file: str) -> str:
        import pandas as pd

        df = pd.read_csv(
            file,
            sep="|",
            skipfooter=1,
            dtype={
                "H": "string",
                "SLOC_KEY": "string",
                "SITE_ID": "string",
                "SITE_NAME": "string",
                "SLOC_ID": "string",
                "SLOC_DESC": "string",
                "COMP_ID": "string",
                "POPULATION_DATE": "string",
            },
        )
        df["POPULATION_DATE"] = pd.to_datetime(
            df["POPULATION_DATE"], format="%d%m%Y"
        ).dt.date
        with NamedTemporaryFile("w", delete=False) as temp_file:
            df.to_parquet(temp_file.name)

        return temp_file.name

    transform_to_parquet_task = transform_to_parquet(download_file_from_raw_zone_task)

    @task
    def upload_file_to_cleaned_zone(file: str, **kwargs) -> None:
        ds = kwargs["data_interval_start"].to_date_string()
        cleaned_bucket = Variable.get("pudp_cleaned_bucket")

        object_name = f"{ds}/storage_cleaned.parquet"
        hook = GCSHook(gcp_conn_id="bigquery_storage_airflow")
        hook.upload(
            bucket_name=cleaned_bucket,
            object_name=object_name,
            filename=file,
        )

    upload_file_to_cleaned_zone_task = upload_file_to_cleaned_zone(
        transform_to_parquet_task
    )

    load_cleaned_data_to_warehouse = GCSToBigQueryOperator(
        task_id="load_cleaned_data_to_warehouse",
        bucket="{{ var.value.pudp_cleaned_bucket }}",
        destination_project_dataset_table="poc-unified-data-platform.dev.storage_raw",
        gcp_conn_id="bigquery_storage_airflow",
        schema_fields=[
            {"name": "H", "type": "STRING", "mode": "NULLABLE"},
            {"name": "SLOC_KEY", "type": "STRING", "mode": "NULLABLE"},
            {"name": "SITE_ID", "type": "STRING", "mode": "NULLABLE"},
            {"name": "SITE_NAME", "type": "STRING", "mode": "NULLABLE"},
            {"name": "SLOC_ID", "type": "STRING", "mode": "NULLABLE"},
            {"name": "SLOC_DESC", "type": "STRING", "mode": "NULLABLE"},
            {"name": "COMP_ID", "type": "STRING", "mode": "NULLABLE"},
            {"name": "POPULATION_DATE", "type": "DATE", "mode": "NULLABLE"},
        ],
        source_format="Parquet",
        source_objects=["{{ ds }}/storage_cleaned.parquet"],
        write_disposition="WRITE_TRUNCATE",
    )

    end = EmptyOperator(task_id="end")

    (
        start
        >> download_file_from_raw_zone_task
        >> measure_data_quality_task
        >> transform_to_parquet_task
        >> upload_file_to_cleaned_zone_task
        >> load_cleaned_data_to_warehouse
        >> end
    )
