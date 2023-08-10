import { Observable } from 'rxjs';

const observables: any[] = [];

const observable1 = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
});

const subscription1 = observable1.subscribe(v => {
    console.log('Observable 1:', v);
});

observables.push(subscription1);

const observable2 = new Observable(observer => {
    observer.next('A');
    observer.next('B');
    observer.next('C');
});

const subscription2 = observable2.subscribe(v => {
    console.log('Observable 2:', v);
});

observables.push(subscription2);

function unsubscribeAll() {
    observables.forEach(subscription => {
        subscription.unsubscribe();
    });
}

unsubscribeAll();
