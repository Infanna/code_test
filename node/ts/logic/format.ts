export interface IHandsetCpc {
  company: string;
  brand: string;
  model: string;
  color?: string;
  matCode: string;
  commercialName: string;
  productType: string;
  productSubtype: string;
  effectiveDate: string;
  groupName?: string;
  thumbnail?: string;
  colorCode?: string;
  priceInclVat: number;
  images: ImageUri[];
}

export interface ImageUri {
  imageUrl: string;
}

interface IHandset {
  id?: string;
  brand: string;
  productType: string;
  productSubType: string;
  model: string;
  commercialName: string;
  searchName: string;
  subGroupModel: string;
  thumbnail: string;
  priorityBand: string;
  company: string;
  effectiveDate: string;
  detail: IHandsetDetail[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface IHandsetDetail {
  colorCode: string;
  colorName: string;
  priceInclVat: number;
  matCode: string[];
  images: ImageUri[];
}

function setHandset(handset: IHandsetCpc): IHandset {
  const name = handset.commercialName || handset.model;
  return {
    company: handset.company,
    productType: handset.productType,
    productSubType: handset.productSubtype,
    brand: handset.brand,
    priorityBand: "",
    commercialName: handset.commercialName,
    searchName: `${handset.brand}${name.replace(/\s/g, "")}`,
    subGroupModel: handset.groupName,
    thumbnail: handset.thumbnail,
    model: handset.model,
    detail: [
      {
        colorCode: handset.colorCode,
        colorName: handset.color,
        priceInclVat: handset.priceInclVat,
        matCode: [handset.matCode],
        images: handset.images,
      },
    ],
    effectiveDate: handset.effectiveDate,
  };
}

function setProductDetail(
  handset: IHandsetCpc,
  detail: IHandsetDetail[]
): IHandsetDetail {
  const existingDetail = detail.find((detail) => {
    return detail.colorName === handset.color;
  });
  if (existingDetail) {
    existingDetail.matCode.push(handset.matCode);
    return existingDetail;
  }

  detail.push({
    colorCode: handset.colorCode?.replace("#", "") || "",
    colorName: handset.color,
    priceInclVat: handset.priceInclVat,
    matCode: [handset.matCode],
    images: handset.images,
  });
}

function transformHandsetMaster(extracted: IHandsetCpc[]): IHandset[] {
  const transformedData: IHandset[] = extracted.reduce(
    (acc: IHandset[], item: IHandsetCpc) => {
      const existingEntryIndex = acc.findIndex((handset: IHandset) => {
        return (
          handset.brand === item.brand &&
          handset.model === item.model &&
          handset.productType === item.productType &&
          handset.productSubType === item.productSubtype
        );
      });
      if (existingEntryIndex !== -1) {
        setProductDetail(item, acc[existingEntryIndex].detail);
      } else {
        const newHandset: IHandset = setHandset(item);
        acc.push(newHandset);
      }
      return acc;
    },
    []
  );
  return transformedData;
}

import { handset } from "./data";
import * as fs from "fs";

function format() {
  const jsonName = "handsetData2.json";
  const handsetData = handset as IHandsetCpc[];
  const formetData = transformHandsetMaster(handsetData);

  const data = JSON.stringify(formetData);

  fs.writeFile(jsonName, data, (error) => {
    // throwing the error
    // in case of a writing problem
    if (error) {
      // logging the error
      console.error(error);

      throw error;
    }

    console.log(`${jsonName} written correctly`);
  });
}

format();
