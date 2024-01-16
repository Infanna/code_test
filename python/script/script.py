### change data
path_to_git_folder = "/Users/few/projects/odds/ais"
year = '2024'
owners = ["Infanna", "patcharachart"]
###

import os
import pandas as pd

result = pd.DataFrame()
result_all = pd.DataFrame()
absolute_path = os.path.dirname(__file__)
path_save_text_file_prefix = f"{absolute_path}/data"

repo = [
    {"name": "device-sales", "path": "mychannel-device-sales"},
    {"name": "sale-batch", "path": "mychannel-sale-batch"},
    {"name": "sale-process-manager", "path": "mychannel-sale-process-manager"},
    {"name": "sale-store", "path": "mychannel-sale-store"},
    {"name": "sale-device-sales", "path": "mychannel-sale-device-sales"},
    {"name": "sale-package", "path": "mychannel-sale-package"},
    {"name": "sale-care", "path": "mychannel-sale-care"},
    {"name": "sale-cart", "path": "mychannel-sale-cart"},
    {"name": "new-payments", "path": "mychannel-new-payments"},
]

month_number = str(input("Enter month number (1-12): "))
if len(month_number) == 1:
    month_number = "0" + month_number


for owner in owners:
    git_command = f"git --no-pager log --author='{owner}' --pretty=format:'%h - %an, %ar, %aD : %s' --since='{year}-{month_number}-01' --until='{year}-{month_number}-31'"

    
    for r in repo:
        path_repo = r["path"]
        name_file_text = f"{owner}_{path_repo}_{year}_{month_number}.txt"
        path_save_text_file = (
            f"{path_save_text_file_prefix}/file/{name_file_text}"
        )
        if os.path.exists(path_save_text_file):
            os.remove(path_save_text_file)
            print(f"File '{path_save_text_file}' removed successfully.")
        else:
            print(f"File '{path_save_text_file}' does not exist.")

        os.system(
            f"cd {path_to_git_folder}/{path_repo} && {git_command} >> {path_save_text_file}"
        )

    for r in repo:
        path_repo = r["path"]
        name_file_text = f"{owner}_{path_repo}_{year}_{month_number}.txt"
        df = pd.read_csv(
            f"{path_save_text_file_prefix}/file/{name_file_text}",
            sep=", | - | : ",
            engine="python",
            names=[
                "commit_code",
                "owner",
                "history",
                "day",
                "timestamp",
                "commit_message",
            ],
            dtype={
                "commit_code": "string",
                "owner": "string",
                "history": "string",
                "day": "string",
                "timestamp": "string",
                "commit_message": "string",
            },
        )
        df["date_time"] = pd.to_datetime(df["timestamp"])
        df["repo_name"] = r["name"]

        columns_titles = [
            "commit_code",
            "owner",
            "repo_name",
            "commit_message",
            "history",
            "day",
            "timestamp",
            "date_time",
        ]
        df = df.reindex(columns=columns_titles)

        result = pd.concat([result, df], ignore_index=True)

    result_all = pd.concat([result_all, result], ignore_index=True)
    result_all = result_all.sort_values(by=["date_time", "repo_name"], ascending=True)

result_all.to_csv(
    f"{path_save_text_file_prefix}/log/all_log_{year}_{month_number}.csv",
    index=False,
)

print(result_all[['repo_name', 'commit_message', 'history', 'timestamp']].to_string(index=False))