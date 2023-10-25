// export function muti(a: number, b: number) {
//     return a + b
// }

import { log } from "console"

// console.log(muti(1, 2));
// const x = ''
// console.log(typeof x === 'string');
// const customerName = 'few za'
// const [ firstName, lastName ] = customerName.split(' ')
// const lastName = customerName?.substring(1, customerName?.indexOf(' '));
// console.log(firstName, lastName);

// const time = '11/09/2023 00.00.00'.split(' ')
// console.log(time[0])

// async function getContractRequest() {
//     const isLoading = false;
//     if (isLoading) {
//         return 'x'
//     }
//     return 'y'
// }

// async function onNext() {
//     getContractRequest()
//         .then((text) => {
//             console.log("then", text)
//         })
//         .catch((text) => {
//             console.log("catch", text)
//         })
//         .finally(() => {
//             console.log("finally")
//         })
// }

// onNext();

function x() {
    const apple = [
        {
            blue: '1',
            kfc: 1
        },
        {
            blue: '2',
            kfc: 2
        },
        {
            blue: '3',
            kfc: 3
        },
        {
            blue: '1',
            kfc: 1
        }
    ]

    const check = apple.filter(i => i.blue == '2').some((i) => i.kfc == 3)
    // const check2 = apple.filter(i => {
    //     i.kfc = i.blue == '3' ? 6 : i.kfc
    // })
    // console.log(apple)
    // console.log(check)
    // console.log(check2)
    const test = new Set(apple)
    console.log(test)

}

// x()

// function testCustomer(errorMessage) {
//     const regexPattern = /\/subScription|\/customer-profile|\/blackListLimit|\/query-contract-mobile/;
//     const isMatch = !regexPattern.test(errorMessage.url);
//     console.log(isMatch);
// }

// testCustomer({
//     url: 'xxcxc/blackListLimit'
// });


function NANtest() {
    const x = {
        "resultCode": "20000",
        "resultDescription": "Success",
        "developerMessage": "Success",
        "data": [
            "EXPORT_CCSM_LOCATION_INFO_20230721_171730.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230721_171730.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230721_193003.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230721_193003.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230724_093153.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230724_093153.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230724_093449.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230724_093449.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230724_103025.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230724_103025.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230725_011642.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230725_011642.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230725_103003.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230725_103003.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230725_141528.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230725_141528.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230726_051526.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230726_051526.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230726_133014.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230726_133014.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230727_093836.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230727_093836.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230727_094136.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230727_094136.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230727_100028.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230727_100028.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230727_101510.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230727_101510.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230727_103014.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230727_103014.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230727_104544.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230727_104544.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230727_224503.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230727_224503.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230731_160205.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230731_160205.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230731_160222.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230731_160222.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230731_161535.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230731_161535.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230802_085828.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230802_085828.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230802_090412.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230802_090412.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230802_091511.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230802_091511.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230802_163004.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230802_163004.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230803_011819.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230803_011819.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230803_040031.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230803_040031.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230803_130024.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230803_130024.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230803_143004.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230803_143004.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230803_153004.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230803_153004.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230803_161504.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230803_161504.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230804_093830.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230804_093830.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230804_094311.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230804_094311.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230804_094531.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230804_094531.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230805_024432.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230805_024432.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230805_024718.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230805_024718.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230805_030121.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230805_030121.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230805_174504.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230805_174504.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230806_000004.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230806_000004.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230806_222359.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230806_222359.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230806_222709.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230806_222709.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230806_223317.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230806_223317.sync",
            "EXPORT_CCSM_LOCATION_INFO_20230807_000004.dat",
            "EXPORT_CCSM_LOCATION_INFO_20230807_000004.sync",
            "error"
        ]
    }

    const fil = x.data.filter(item => item !== "error");
    console.log(fil)
    const dat = fil.slice(-2)[0];
    const sync = fil.slice(-1)[0];
    console.log('dat', dat)
    console.log('sync', sync)
}

import * as fs from 'fs';
function readLineDataToOBJ() { // : Promise<any> {
    // const sLine = fs.readFileSync('data.json', 'utf-8');
    // // console.log(sLine)
    // let sData: any = sLine.split('|');
    // let i = 0;
    // let result: any;
    // console.log('sData[0]', sData[0])
    // for (let idxDataList in sData) {
    //     if (idxDataList === "02") {
    //         let _sData: any = {
    //             Record_Type: sData[i++] || '',
    //             ROW_ID: sData[i++] || '',
    //             LOCATION_CODE: sData[i++] || '',
    //             LOCATION_NAME: sData[i++] || '',
    //             LOCATION_NAME_EN: sData[i++] || '',
    //             REGISTER_CODE: sData[i++] || '',
    //             DEALER_CODE: sData[i++] || '',
    //             DEALER_NAME: sData[i++] || '',
    //             VENDOR_CODE: sData[i++] || '',
    //             VENDOR_NAME: sData[i++] || '',
    //             PAYER_CODE: sData[i++] || '',
    //             BILL_TO: sData[i++] || '',
    //             CASH_IN_TRANSIT: sData[i++] || '',
    //             INTERCOM: sData[i++] || '',
    //             ONETIME: sData[i++] || '',
    //             AR_SUMMARY: sData[i++] || '',
    //             SHIP_TO: sData[i++] || '',
    //             PAR_OU_ID: sData[i++] || '',
    //             MOBILE_NUM: sData[i++] || '',
    //             LOC_TYPE: sData[i++] || '',
    //             LOC_SUBTYPE: sData[i++] || '',
    //             DIST_CHN_CODE: sData[i++] || '',
    //             CHN_SALES_CODE: sData[i++] || '',
    //             SHOP_TYPE: sData[i++] || '',
    //             SHOP_SEGMENT: sData[i++] || '',
    //             SHOP_AREA: sData[i++] || '',
    //             RETAIL_SHOP: sData[i++] || '',
    //             COMPANY_ABBR: sData[i++] || '',
    //             CHN_TYPE: sData[i++] || '',
    //             CHARACTERISTIC: sData[i++] || '',
    //             CHARACTERISTIC_ORG: sData[i++] || '',
    //             AIS_STATUS: sData[i++] || '',
    //             EFFECTIVE_DT: sData[i++] || '',
    //             TERMINATE_DT: sData[i++] || '',
    //             REGION: sData[i++] || '',
    //             SUB_REGION: sData[i++] || '',
    //             BUSINESS_UNIT: sData[i++] || '',
    //             PROVINCE: sData[i++] || '',
    //             POST_CODE: sData[i++] || '',
    //             NET_REGION: sData[i++] || '',
    //             AIS_CLASS: sData[i++] || '',
    //             HEADQUARTER_FLAG: sData[i++] || '',
    //             TAX_ID: sData[i++] || '',
    //             PAYMENT_CHANNEL_ID: sData[i++] || '',
    //             CREATED_BY: sData[i++] || '',
    //             CREATED_DTM: sData[i++] || '',
    //             LAST_UPD_BY: sData[i++] || '',
    //             LAST_UPD_DTM: sData[i++] || '',
    //             EMAIL_ADDRESS: sData[i++] || '',
    //             STORE_NO: sData[i++] || '',
    //             PARENT_LOCATION: sData[i++] || '',
    //             BRANCH_NO: sData[i++] || '',
    //             DIST_CHN_NAME: sData[i++] || '',
    //             CHN_SALES_NAME: sData[i++] || '',
    //             SHOP_TYPE_NAME: sData[i++] || '',
    //             PUBLIC_NAME_TH: sData[i++] || '',
    //             PUBLIC_NAME_EN: sData[i++] || '',
    //             SHOP_FLAG: sData[i++] || '',
    //             SHOP_SEGMENT_NAME: sData[i++] || '',
    //             SHOP_TYPE_GROUP_CODE: sData[i++] || '',
    //             SHOP_TYPE_GROUP_NAME: sData[i++] || '',
    //             TUMBOL_TH: sData[i++] || '',
    //             AMPHUR_TH: sData[i++] || ''
    //         };
    //         result = _sData;
    //     } else {
    //         let _sData: any = {
    //             Record_Type: sData[i++] || '',
    //             DATA: sData[i++] || ''
    //         };
    //         result = _sData;
    //     }
    //     console.log('result', result)
    // }
    console.log(parseFloat('111111111111w'.charAt(12)))

}

readLineDataToOBJ();