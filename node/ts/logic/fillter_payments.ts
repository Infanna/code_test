const paymentApple = {
    statusCode: '20000',
    statusDesc: 'success',
    payments: [
        {
            cardType: '',
            method: 'CA',
            banks: [],
        },
        {
            cardType: '',
            method: 'CC',
            banks: [],
        },
    ],
};

const paymentsData = {
    "statusCode": "20000",
    "statusDesc": "Success",
    "payments": [
        {
            "cardType": null,
            "method": "CA",
            "banks": [

            ]
        },
        {
            "cardType": null,
            "method": "CC",
            "banks": [

            ]
        },
        {
            "cardType": null,
            "method": "DC",
            "banks": [

            ]
        },
        {
            "cardType": null,
            "method": "LS",
            "banks": [

            ]
        },
        {
            "cardType": null,
            "method": "PB",
            "banks": [

            ]
        },
        {
            "cardType": null,
            "method": "RL",
            "banks": [

            ]
        },
        {
            "cardType": "MASTER",
            "method": "CC",
            "banks": [
                {
                    "bankAbbr": "BAY",
                    "bankDescEn": "BANK OF AYUDHAYA PUBLIC COMPANY LIMITED",
                    "bankDescTh": "กรุงศรีอยุธยา จำกัด (มหาชน)",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/BAY_BAY.png",
                    "installments": [
                        // {
                        //     "installmentId": "283",
                        //     "installmentRate": "0",
                        //     "installmentTerms": "6",
                        //     "balloonMonth": null
                        // }
                    ]
                },
                {
                    "bankAbbr": "BBL",
                    "bankDescEn": "BANGKOK BANK PUBLIC COMPANY LIMITED",
                    "bankDescTh": "กรุงเทพ จำกัด (มหาชน)",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/BBL_BBL.png",
                    "installments": [
                        {
                            "installmentId": "339",
                            "installmentRate": "0",
                            "installmentTerms": "6",
                            "balloonMonth": null
                        }
                    ]
                }
            ]
        },
        {
            "cardType": "OTHER",
            "method": "CC",
            "banks": [
                {
                    "bankAbbr": "BAY",
                    "bankDescEn": "BANK OF AYUDHAYA PUBLIC COMPANY LIMITED",
                    "bankDescTh": "กรุงศรีอยุธยา จำกัด (มหาชน)",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/BAY_BAY.png",
                    "installments": [
                        {
                            "installmentId": "283",
                            "installmentRate": "0",
                            "installmentTerms": "6",
                            "balloonMonth": null
                        }
                    ]
                },
                {
                    "bankAbbr": "BBL",
                    "bankDescEn": "BANGKOK BANK PUBLIC COMPANY LIMITED",
                    "bankDescTh": "กรุงเทพ จำกัด (มหาชน)",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/BBL_BBL.png",
                    "installments": [
                        {
                            "installmentId": "339",
                            "installmentRate": "0",
                            "installmentTerms": "6",
                            "balloonMonth": null
                        }
                    ]
                }
            ]
        },
        {
            "cardType": "VISA",
            "method": "CC",
            "banks": [
                {
                    "bankAbbr": "BAY",
                    "bankDescEn": "BANK OF AYUDHAYA PUBLIC COMPANY LIMITED",
                    "bankDescTh": "กรุงศรีอยุธยา จำกัด (มหาชน)",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/BAY_BAY.png",
                    "installments": [
                        {
                            "installmentId": "270",
                            "installmentRate": "0",
                            "installmentTerms": "20",
                            "balloonMonth": null
                        },
                        {
                            "installmentId": "274",
                            "installmentRate": "0",
                            "installmentTerms": "18",
                            "balloonMonth": null
                        },
                        {
                            "installmentId": "283",
                            "installmentRate": "0",
                            "installmentTerms": "6",
                            "balloonMonth": null
                        }
                    ]
                },
                {
                    "bankAbbr": "BBL",
                    "bankDescEn": "BANGKOK BANK PUBLIC COMPANY LIMITED",
                    "bankDescTh": "กรุงเทพ จำกัด (มหาชน)",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/BBL_BBL.png",
                    "installments": [
                        {
                            "installmentId": "339",
                            "installmentRate": "0",
                            "installmentTerms": "6",
                            "balloonMonth": null
                        }
                    ]
                },
                {
                    "bankAbbr": "UOBCASHP",
                    "bankDescEn": "UNITED OVERSEAS BANK(THAI)PUBLIC COMPANY LIMITED",
                    "bankDescTh": "UOB Cash Plus",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/UOBCASHP_UOB CashPlus.png",
                    "installments": [
                        {
                            "installmentId": "701",
                            "installmentRate": "0",
                            "installmentTerms": "20",
                            "balloonMonth": null
                        },
                        {
                            "installmentId": "702",
                            "installmentRate": "0",
                            "installmentTerms": "18",
                            "balloonMonth": null
                        }
                    ]
                }
            ]
        }
    ]
}
// cc จ่ายเต็มเป็นค่าว่าง
const bankPromotion = {
    "statusCode": "20000",
    "statusDesc": "success",
    "banks": [
        {
            "name": "ซิตี้แบงก์",
            "abb": "CITI",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/CITI_CITI.png"
        },
        {
            "name": "ซิตี้แบงก์ เรดดี้เครดิต",
            "abb": "CITIREADY",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/CITIREADY_citibank02.jpg"
        },
        {
            "name": "ไทยพาณิชย์ จำกัด (มหาชน)",
            "abb": "SCB",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/SCB_SCB02.png"
        },
        {
            "name": "กสิกรไทย จำกัด (มหาชน)",
            "abb": "KBNK",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/KBNK_kBank02.png"
        },
        {
            "name": "อยุธยาคาร์ด เซอร์วิสเซส",
            "abb": "ACS",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/ACS_ACS_BAY03.png"
        },
        {
            "name": "กรุงศรีอยุธยา จำกัด (มหาชน)",
            "abb": "BAY",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/BAY_BAY.png"
        },
        {
            "name": "บริษัทอิออนธนสินทรัพย์ (ไทยแลนด์) จำกัด (มหาชน)",
            "abb": "AEON",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/AEON_AEON-logo.png"
        },
        {
            "name": "กรุงเทพ จำกัด (มหาชน)",
            "abb": "BBL",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/BBL_BBL.png"
        },
        {
            "name": "แห่งประเทศจีน",
            "abb": "BOC",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/BOC_BOC.png"
        },
        {
            "name": "ซีไอเอ็มบี ไทย จำกัด (มหาชน)",
            "abb": "CIMB",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/CIMB_CIMB.png"
        },
        {
            "name": "แคปปิตอล โอเค",
            "abb": "COK",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/COK_capOK.png"
        },
        {
            "name": "เซ็นทรัล",
            "abb": "CT",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/CT_centralThe1.png"
        },
        {
            "name": "บัตรเครดิต เฟิร์สช้อยส์",
            "abb": "FCC",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/FCC_FCC.png"
        },
        {
            "name": "ออมสิน",
            "abb": "GSB",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/GSB_GSB.png"
        },
        {
            "name": "ฮ่องกงแอนด์เซี่ยงไฮ้",
            "abb": "HKSH",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/HKSH_HSBC.png"
        },
        {
            "name": "กรุงไทย จำกัด (มหาชน)",
            "abb": "KTB",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/KTB_KTB.png"
        },
        {
            "name": "SCB Speedy Cash",
            "abb": "SCBSPEEDY",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/SCBSPEEDY_SCB Speedy.png"
        },
        {
            "name": "สแตนดาร์ดชาร์เตอร์ด (ไทย) จำกัด (มหาชน)",
            "abb": "SCN",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/SCN_scn-logo.jpg"
        },
        {
            "name": "บัตรเครดิต เทสโก้ โลตัส วีซ่า",
            "abb": "TCS",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/TCS_TescoLotus-CreditCard.png"
        },
        {
            "name": "ยูโอบี จำกัด (มหาชน)",
            "abb": "UOB",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/UOB_UOB-bank.png"
        },
        {
            "name": "UOB Cash Plus",
            "abb": "UOBCASHP",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/UOBCASHP_UOB CashPlus.png"
        },
        {
            "name": "ธนาคารทหารไทยธนชาต จำกัด (มหาชน)",
            "abb": "TTB",
            "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/997f660d-2074-464c-b963-6d23284bdcdb.jpeg"
        }
    ]
}

const expected = {
    "statusCode": "20000",
    "statusDesc": "Success",
    "payments": [
        {
            "method": "CA",
            "cardType": "",
            "banks": [],
            "banksFullPaid": [],
            "banksInstallment": [],
            "methodName": "Cash",
            "methodNameTh": "เงินสด (เต็มจำนวน)"
        },
        {
            "method": "LS",
            "cardType": "",
            "banks": [],
            "banksFullPaid": [],
            "banksInstallment": [],
            "methodName": "Leasing",
            "methodNameTh": "สินเชื่อ"
        },
        {
            "method": "CC",
            "cardType": "MIXED",
            "banks": [],
            "banksFullPaid": [
                {
                    "bankAbbr": "CITI",
                    "bankDescTh": "ซิตี้แบงก์",
                    "bankDescEn": "ซิตี้แบงก์",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/CITI_CITI.png",
                    "installments": []
                },
                {
                    "bankAbbr": "CITIREADY",
                    "bankDescTh": "ซิตี้แบงก์ เรดดี้เครดิต",
                    "bankDescEn": "ซิตี้แบงก์ เรดดี้เครดิต",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/CITIREADY_citibank02.jpg",
                    "installments": []
                },
                {
                    "bankAbbr": "SCB",
                    "bankDescTh": "ไทยพาณิชย์ จำกัด (มหาชน)",
                    "bankDescEn": "ไทยพาณิชย์ จำกัด (มหาชน)",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/SCB_SCB02.png",
                    "installments": []
                },
                {
                    "bankAbbr": "KBNK",
                    "bankDescTh": "กสิกรไทย จำกัด (มหาชน)",
                    "bankDescEn": "กสิกรไทย จำกัด (มหาชน)",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/KBNK_kBank02.png",
                    "installments": []
                },
                {
                    "bankAbbr": "ACS",
                    "bankDescTh": "อยุธยาคาร์ด เซอร์วิสเซส",
                    "bankDescEn": "อยุธยาคาร์ด เซอร์วิสเซส",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/ACS_ACS_BAY03.png",
                    "installments": []
                },
                {
                    "bankAbbr": "BAY",
                    "bankDescTh": "กรุงศรีอยุธยา จำกัด (มหาชน)",
                    "bankDescEn": "กรุงศรีอยุธยา จำกัด (มหาชน)",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/BAY_BAY.png",
                    "installments": []
                },
                {
                    "bankAbbr": "AEON",
                    "bankDescTh": "บริษัทอิออนธนสินทรัพย์ (ไทยแลนด์) จำกัด (มหาชน)",
                    "bankDescEn": "บริษัทอิออนธนสินทรัพย์ (ไทยแลนด์) จำกัด (มหาชน)",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/AEON_AEON-logo.png",
                    "installments": []
                },
                {
                    "bankAbbr": "BBL",
                    "bankDescTh": "กรุงเทพ จำกัด (มหาชน)",
                    "bankDescEn": "กรุงเทพ จำกัด (มหาชน)",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/BBL_BBL.png",
                    "installments": []
                },
                {
                    "bankAbbr": "BOC",
                    "bankDescTh": "แห่งประเทศจีน",
                    "bankDescEn": "แห่งประเทศจีน",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/BOC_BOC.png",
                    "installments": []
                },
                {
                    "bankAbbr": "CIMB",
                    "bankDescTh": "ซีไอเอ็มบี ไทย จำกัด (มหาชน)",
                    "bankDescEn": "ซีไอเอ็มบี ไทย จำกัด (มหาชน)",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/CIMB_CIMB.png",
                    "installments": []
                },
                {
                    "bankAbbr": "COK",
                    "bankDescTh": "แคปปิตอล โอเค",
                    "bankDescEn": "แคปปิตอล โอเค",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/COK_capOK.png",
                    "installments": []
                },
                {
                    "bankAbbr": "CT",
                    "bankDescTh": "เซ็นทรัล",
                    "bankDescEn": "เซ็นทรัล",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/CT_centralThe1.png",
                    "installments": []
                },
                {
                    "bankAbbr": "FCC",
                    "bankDescTh": "บัตรเครดิต เฟิร์สช้อยส์",
                    "bankDescEn": "บัตรเครดิต เฟิร์สช้อยส์",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/FCC_FCC.png",
                    "installments": []
                },
                {
                    "bankAbbr": "GSB",
                    "bankDescTh": "ออมสิน",
                    "bankDescEn": "ออมสิน",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/GSB_GSB.png",
                    "installments": []
                },
                {
                    "bankAbbr": "HKSH",
                    "bankDescTh": "ฮ่องกงแอนด์เซี่ยงไฮ้",
                    "bankDescEn": "ฮ่องกงแอนด์เซี่ยงไฮ้",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/HKSH_HSBC.png",
                    "installments": []
                },
                {
                    "bankAbbr": "KTB",
                    "bankDescTh": "กรุงไทย จำกัด (มหาชน)",
                    "bankDescEn": "กรุงไทย จำกัด (มหาชน)",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/KTB_KTB.png",
                    "installments": []
                },
                {
                    "bankAbbr": "SCBSPEEDY",
                    "bankDescTh": "SCB Speedy Cash",
                    "bankDescEn": "SCB Speedy Cash",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/SCBSPEEDY_SCB Speedy.png",
                    "installments": []
                },
                {
                    "bankAbbr": "SCN",
                    "bankDescTh": "สแตนดาร์ดชาร์เตอร์ด (ไทย) จำกัด (มหาชน)",
                    "bankDescEn": "สแตนดาร์ดชาร์เตอร์ด (ไทย) จำกัด (มหาชน)",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/SCN_scn-logo.jpg",
                    "installments": []
                },
                {
                    "bankAbbr": "TCS",
                    "bankDescTh": "บัตรเครดิต เทสโก้ โลตัส วีซ่า",
                    "bankDescEn": "บัตรเครดิต เทสโก้ โลตัส วีซ่า",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/TCS_TescoLotus-CreditCard.png",
                    "installments": []
                },
                {
                    "bankAbbr": "UOB",
                    "bankDescTh": "ยูโอบี จำกัด (มหาชน)",
                    "bankDescEn": "ยูโอบี จำกัด (มหาชน)",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/UOB_UOB-bank.png",
                    "installments": []
                },
                {
                    "bankAbbr": "UOBCASHP",
                    "bankDescTh": "UOB Cash Plus",
                    "bankDescEn": "UOB Cash Plus",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/UOBCASHP_UOB CashPlus.png",
                    "installments": []
                },
                {
                    "bankAbbr": "TTB",
                    "bankDescTh": "ธนาคารทหารไทยธนชาต จำกัด (มหาชน)",
                    "bankDescEn": "ธนาคารทหารไทยธนชาต จำกัด (มหาชน)",
                    "imageUrl": "https://sit-admin-cpc.cdc.ais.th/admin-fe/assets/files/images/997f660d-2074-464c-b963-6d23284bdcdb.jpeg",
                    "installments": []
                }
            ],
            "banksInstallment": [],
            "methodName": "Credit Card",
            "methodNameTh": "เครดิตการ์ด"
        }
    ]
}

function formatPayment(paymentsData) {
    // console.log(paymentsData)
    const cash = {
        "method": "CA",
        "cardType": "",
        "banks": [],
        "banksFullPaid": [],
        "banksInstallment": [],
        "methodName": "Cash",
        "methodNameTh": "เงินสด (เต็มจำนวน)"
    }
    const ls = {
        "method": "LS",
        "cardType": "",
        "banks": [],
        "banksFullPaid": [],
        "banksInstallment": [],
        "methodName": "Leasing",
        "methodNameTh": "สินเชื่อ"
    }
    let cc = {
        "method": "CC",
        "cardType": "MIXED",
        "banks": [],
        "banksFullPaid": [],
        "banksInstallment": [],
        "methodName": "Credit Card",
        "methodNameTh": "เครดิตการ์ด"
    }

    const data: object[] = paymentsData.payments.filter(item => item.method === 'CC').map(item => item.banks)
    const mergedArray = [].concat(...data);
    // console.log("=====")
    // console.log(mergedArray)
    // console.log("=====")
    // const groupedMap = new Map<string, any>();

    // mergedArray.forEach((item) => {
    //     if (groupedMap.has(item.bankAbbr)) {
    //         const existingItem = groupedMap.get(item.bankAbbr);

    //         // console.log('===',existingItem)
    //         existingItem.installments.push(...item.installments);
    //         //console.log('===>',existingItem)
    //     } else {
    //         groupedMap.set(item.bankAbbr, { ...item });
    //     }
    // });

    // Convert the Map values back to an array
    // const installmentAllBank = Array.from(groupedMap.values());

    // const removeDuplicateInstallmentId = new Map<string, boolean>();
    // console.log(installmentAllBank)
    // installmentAllBank.forEach((item) => {
    //     // Filter and remove duplicate installments based on installmentId
    //     item.installments = item.installments.filter((installment) => {
    //         if (!removeDuplicateInstallmentId.has(installment.installmentId)) {
    //             removeDuplicateInstallmentId.set(installment.installmentId, true);
    //             return true;
    //         }
    //         return false;
    //     });
    // });
    // console.log("===============================")
    // console.log(installmentAllBank)

    // const installment = mergedArray.filter()
    // console.log([].concat(...installment))
    // const bankFull = mergedArray.filter(item => item.installments.length === 0)
    //console.log(bankFull)


}

// formatPayment(paymentsData);


// console.log([].concat(...[['1'],['2']]))

function getBankPromotion(paymentData, bankPromotion) {
    // console.log(bankPromotion)
    const mapBankPromotion: any[] = bankPromotion.banks.map((item) => (
        {
            bankAbbr: item.abb,
            bankDescTh: item.name,
            bankDescEn: item.name,
            imageUrl: item.imageUrl
        }
    ))
    console.log(mapBankPromotion)
    // const banksWithNoInstallments = getBanksWithNoInstallments(paymentData)
    // const mergedArray = mapBankPromotion.concat(banksWithNoInstallments)

}

//getBankPromotion(paymentsData, bankPromotion)

function getBanksWithNoInstallments(paymentsData) {
    const banksWithNoInstallments: any[] = paymentsData.payments.reduce((accumulator, payment) => {
        if (payment.method === "CC") {
            const banksWithNoInstallmentsForPayment = payment.banks.filter((bank) => bank.installments.length === 0);
            return accumulator.concat(banksWithNoInstallmentsForPayment);
        }
        return accumulator;
    }, []);

    console.log(banksWithNoInstallments);
}

// getBanksWithNoInstallments(paymentsData)
//const x = ['1', '4']
//console.log(x.concat(['2', '3']))

function remove(payment) {
    const uniqueInstallmentIds = new Set<string>();

    // Iterate through the banks and filter duplicate installmentIds
    payment.payments.forEach((payment) => {
        payment.banks.forEach((bank) => {
            bank.installments = bank.installments.filter((installment) => {
                console.log(installment)
                if (!uniqueInstallmentIds.has(installment.installmentId)) {
                    uniqueInstallmentIds.add(installment.installmentId);
                    return true;
                }
                return false;
            });
        });
    });

    console.log(payment);

    // const filePath = 'data.json';

    // // Convert JSON data to string
    // const jsonString = JSON.stringify(payment, null, 2); // The third argument adds indentation for readability

    // // Write the JSON data to a file
    // fs.writeFileSync(filePath, jsonString, 'utf-8');

    // console.log(`JSON data exported to ${filePath}`);
}

// remove(paymentsData)



function getpayment(paymentData) {
    const data: any[] = paymentData.payments.filter(item => item.method === 'CC').map(item => item.banks)
    // console.log("data", data)
    const mergedArray: any[] = [].concat(...data);
    //console.log("===>>>", mergedArray)

    getPaymentWithFullCreditCard('1100', mergedArray)
    getPaymentWithInstallmentCreditCard(mergedArray)

}

async function getPaymentWithFullCreditCard(locationCode: string, paymentByCreditCard: any[]) {
    console.log(paymentByCreditCard)
    const banksProData: any = bankPromotion
    const mapBankPromotion: any[] = banksProData.banks.map((item) => (
        {
            bankAbbr: item.abb,
            bankDescTh: item.name,
            bankDescEn: item.name,
            imageUrl: item.imageUrl
        }
    ))
        console.log('xx')

    const paymentWithNoInstallments = paymentByCreditCard.filter(item => item.installments.length === 0)
    console.log('paymentWithNoInstallments===>', paymentWithNoInstallments)
    const paymentFullPaidMerge = [].concat(...mapBankPromotion, ...paymentWithNoInstallments);
    // console.log('paymentFullPaidMerge===>', paymentFullPaidMerge)
    const removeDuplicateBank = new Set();

    const paymentFullPaid = paymentFullPaidMerge.filter((item) => {
        if (!removeDuplicateBank.has(item.bankAbbr)) {
            removeDuplicateBank.add(item.bankAbbr);
            return true;
        }
        return false;
    });

    //console.log('===>', paymentFullPaid)
}

getpayment(paymentsData)

async function getPaymentWithInstallmentCreditCard(paymentByCreditCard: any[]): Promise<any[]> {
    const groupedMap = new Map<string, any>();

    paymentByCreditCard.forEach((item) => {
        if (groupedMap.has(item.bankAbbr)) {
            const existingItem = groupedMap.get(item.bankAbbr);
            existingItem.installments.push(...item.installments);
        } else {
            groupedMap.set(item.bankAbbr, { ...item });
        }
    });

    const paymentInstallment: any[] = Array.from(groupedMap.values());

    const removeDuplicateInstallmentId = new Set();
    paymentInstallment.forEach((item) => {
        item.installments = item.installments.filter((installment: any) => {
            removeDuplicateInstallmentId.add(installment.installmentId);
        })
    });
    console.log(Array.from(removeDuplicateInstallmentId.values()))
    // paymentInstallment.forEach((item) => {
    // 	item.installments = item.installments.filter((installment: any) => {
    // 		if (!removeDuplicateInstallmentId.has(installment.installmentId)) {
    // 			removeDuplicateInstallmentId.add(installment.installmentId);
    //             console.log(removeDuplicateInstallmentId)
    // 			return true;
    // 		}
    // 		return false;
    // 	});
    // });

    // console.log("paymentInstallment", paymentInstallment)

    const sortedData = paymentInstallment.map(bank => ({
        ...bank,
        installments: bank.installments.sort((a, b) => parseInt(a.installmentTerms) - parseInt(b.installmentTerms))
    }));

    //   console.log("sortedData", sortedData[0].installments)


    return paymentInstallment
}


// getpayment(paymentsData)


function fillterApple(data) {
    const payment = {
        statusCode: '20000',
        statusDesc: 'success',
        payments: [
            {
                cardType: '',
                method: 'CA',
                banks: [],
            },
            {
                cardType: '',
                method: 'CC',
                banks: [],
            },
        ],
    };
    console.log(payment.payments.map((item) => item.method))
    // console.log(data.payments.filter((item) => (payment.payments.map((item) => item.method)).includes(item.method)))
    payment.payments = data.payments.filter((item) => (payment.payments.map((item) => item.method)).includes(item.method))
    console.log(data)
}

// fillterApple(expected)

function testFilter(response) {
    const CA = 'CAxxx'
    const LS = 'LSxxx'
    const CC = 'CCxxx'
    let payment = []
    //const filterByMethod = response.payments.filter((item) => filterMethod.includes(item.method)).map((x) => duplicateMethod.add(x.method))
    // const filterByMethod = response.payments.filter((item: any) => {
    //     if (filterMethod.includes(item.method)) {
    //         return true;
    //     }
    //     return false;
    // }).forEach((x) => {
    //     console.log(x)
    //     if (x.method == 'CA') {
    //         payment.push(CA)
    //     }
    //     if (x.method == 'LS') {
    //         payment.push(LS)
    //     }
    //     if (x.method == 'CC') {
    //         payment.push(CC)
    //     }
    // });

    const filterMethod = ['CA', 'LS', 'CC']
    const ducplicateMethod = new Set();
    response.payments.forEach(async (item: any) => {
        if (!ducplicateMethod.has(item.method) && filterMethod.includes(item.method)) {
            ducplicateMethod.add(item.method)
            if (item.method == 'CA') {
                payment.push(CA)
            }
            if (item.method == 'LS') {
                payment.push(LS)
            }
            if (item.method == 'CC') {
                payment.push(CC)
            }
        } else if (!filterMethod.includes(item.method)) {
            payment.push({
                method: item.method,
                cardType: item.cardType,
                banks: item.banks,
                banksFullPaid: item.banksFullPaid || [],
                banksInstallment: item.banksInstallment || [],
                methodName: item.methodName || item.method,
                methodNameTh: item.methodNameTh || item.method,
            });
        }
    });

    console.log(payment)
    console.log(ducplicateMethod)
}

// testFilter(paymentsData)

function filter(expected) {
    const x = expected.payments.filter((item) => {
        console.log(item.banksFullPaid.length)
        console.log(item.banksInstallment.length)
        if (item.banksFullPaid.length === 0 && item.banksInstallment === 0) {
            console.log(item.banksInstallment.length)
            return false
        }
        return true

    })
    // console.log(expected)
    // console.log("=======")
    // console.log(x)
}

// filter(expected)

