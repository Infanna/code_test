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

async function getContractRequest() {
    const isLoading = false;
    if (isLoading) {
        return 'x'
    }
    return 'y'
}

async function onNext() {
    getContractRequest()
        .then((text) => {
            console.log("then", text)
        })
        .catch((text) => {
            console.log("catch", text)
        })
        .finally(() => {
            console.log("finally")
        })
}

onNext();