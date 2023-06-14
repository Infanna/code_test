export interface ICart {
    resultCode: string;
    resultDescription: string;
    developerMessage: string;
    data: Cart;
}

export interface Cart {
    productList: ICartProduct[];
}

export interface ICartProduct {
    brand: string;
    model: string;
    color: string;
    amount: string;
    campaignId: string;
    campaignName: string;
    privilegeId: string;
    tradeNo: string;
    tradeName: string;
    normalPrice: number;
    netPrice: string;
    customerGroups: ICartCustomerGroup[];
    advancePay: ICartAdvancePay;
    discount: ICartDiscount;
    freeGoods: ICartFreeGood[];
}

export interface ICartCustomerGroup {
    name: string;
    code: string;
    flowId: string;
}

export interface ICartAdvancePay {
    tradeAirtimeId: null | string;
    amount: number;
    installmentFlag: string;
    matAirtime: null | string;
    description: null | string;
    payAdvanceGroupId: null | string;
    promotions: any[]; // Change `any[]` to the appropriate type if possible
}

export interface ICartDiscount {
    tradeDiscountId: string;
    type: string;
    value: string;
    amount: string;
    specialType: null | string;
    specialAmount: number;
    discountExcludeVat: number;
    discountIncludeVat: number;
    tradePriceExcludeVat: null | number;
    tradePriceIncludeVat: null | number;
    installmentPartnerFlag: null | string;
    option: string;
    payAdvanceGroupId: null | string;
}

export interface ICartFreeGood {
    name: string;
    code: string;
    qty: string;
}