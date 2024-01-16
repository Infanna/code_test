import os
import pandas as pd

result = pd.DataFrame()
result_all = pd.DataFrame()
path_prefix = "/Users/few/projects/odds/ais"
owners = ["Infanna", "patcharachart"]
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

for owner in owners:
    git_command = f"git --no-pager log --author='{owner}' --pretty=format:'%h - %an, %ar, %aD : %s' --since='2024-01-01' --until='2024-01-31'"
    for r in repo:
        path_repo = r["path"]
        file_path = f"/Users/few/projects/code_test/python/script/data/file/{path_repo}.txt"
        if os.path.exists(file_path):
            os.remove(file_path)
            print(f"File '{file_path}' removed successfully.")
        else:
            print(f"File '{file_path}' does not exist.")

        textFile = f"/Users/few/projects/code_test/python/script/data/file/{path_repo}.txt"
        os.system(f"cd {path_prefix}/{path_repo} && {git_command} >> {textFile}")

    for r in repo:
        path_repo = r["path"]
        df = pd.read_csv(
            f"/Users/few/projects/code_test/python/script/data/file/{path_repo}.txt",
            sep=", | - | : ",
            engine="python",
            names=["commit_code", "owner", "history", "day", "timestamp", "commit_message"],
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
        result = result.sort_values(by=["date_time", "repo_name"], ascending=True)

    result_all = pd.concat([result_all, result], ignore_index=True)
    result_all = result_all.sort_values(by=["date_time", "repo_name"], ascending=True)

result_all.to_csv(
    "/Users/few/projects/code_test/python/script/data/ais_log/all_log.csv",
    index=False,
)

