import { interval } from "rxjs";

const observable = interval(1000);

const subscription = observable.subscribe(v => {
    if (v === 3) {
        subscription.unsubscribe();
    }
    console.log(v);
});

