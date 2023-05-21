import pandas as pd


path = "/Users/few/projects/code_test/python/data/d_storage_loc_poc.txt"


df = pd.read_csv(
    path,
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

df["POPULATION_DATE"] = pd.to_datetime(df["POPULATION_DATE"],  format="%d%m%Y")
print(df["POPULATION_DATE"].dt.date)
print(df.dtypes)
print(df)

