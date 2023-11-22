import { firstValueFrom, EMPTY } from 'rxjs';

async function show() {
    const result = await firstValueFrom(EMPTY, { defaultValue: 5 });
    console.log(result);
}

show();
// Expected output:
// 0