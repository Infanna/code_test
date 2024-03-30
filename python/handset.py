import pandas as pd

path = "/Users/few/projects/personal/code_test/python/data"

name_file = f"{path}/CPC_Brand_Handset_290324_4.csv"
df = pd.read_csv(name_file)
df["IMAGE_URL"] = df["IMAGE_URL"].str.split(",")

print(df)

for col in df.columns:
    print(col)

df = df.rename(
    columns={
        "COMPANY": "company",
        "MAT_CODE": "matCode",
        "COLOR": "color",
        "BRAND": "brand",
        "MODEL": "model",
        "PRODUCT_TYPE": "productType",
        "PRODUCT_SUBTYPE": "productSubtype",
        "EFFECTIVE_DATE": "effectiveDate",
        "NORMAL_PRICE": "priceInclVat",
        "COMMERCIAL_NAME": "commercialName",
        "GROUP_NAME": "groupName",
        "COLOR_CODE": "colorCode",
        "THUMBNAIL": "thumbnail",
        "IMAGE_URL": "images",
    },
    errors="raise",
)
df = df.filter(
    items=[
        "company",
        "matCode",
        "color",
        "brand",
        "model",
        "productType",
        "productSubtype",
        "effectiveDate",
        "priceInclVat",
        "commercialName",
        "groupName",
        "colorCode",
        "thumbnail",
        "images",
    ]
)


def convert_to_dict(x):
    if isinstance(x, list):
        return [{"imageUrl": item} for item in x]
    else:
        return [{"imageUrl": ""}]  # Handle NaN values


# Apply the conversion function to the "images" column
df["images"] = df["images"].apply(convert_to_dict)

df.to_json("handsetThai.json", orient="records", lines=True)
