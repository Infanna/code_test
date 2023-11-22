import { interval, firstValueFrom, lastValueFrom } from 'rxjs';

async function execute() {
    const source$ = interval(1000);
    const firstNumber = await firstValueFrom(source$);
    console.log(`The first number is ${firstNumber}`);
}
execute();

async function execute2() {
    const source$ = interval(1000);
    firstValueFrom(source$).then((n) => {
        console.log(`The second number is ${n}`);
    });
}
execute2();

async function execute3() {
    const source$ = interval(1000);
    source$.subscribe((n) => {
        console.log(`The subscribe number is ${n}`);    
    })
}
execute3();

async function execute4() {
    const source$ = interval(1000);
    lastValueFrom(source$).then((n) => {
        console.log(`The lastValueFrom number is ${n}`);
    });
}
execute4();