import { firstValueFrom, interval } from "rxjs";

const observable1 = interval(600);
const observable2 = interval(400);
const observable3 = interval(200);

// async function getData() {
//     let number = -1
//     number = await firstValueFrom(observable)
//     console.log("finnish")
//     return number

// }

async function showData() {
    const x = await firstValueFrom(observable1)
    console.log("x", x)
    const y = await firstValueFrom(observable2)
    console.log("y", y)
    const z = await firstValueFrom(observable3)
    console.log("z", z)

    console.log("finnish", x, y, z)
}

showData();