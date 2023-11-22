const paymentsFillter = {
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