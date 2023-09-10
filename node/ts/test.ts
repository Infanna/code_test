// export function muti(a: number, b: number) {
//     return a + b
// }

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

x()


