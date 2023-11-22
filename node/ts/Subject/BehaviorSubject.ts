import { BehaviorSubject } from 'rxjs';

// const subject1 = new BehaviorSubject(1);
// console.log(subject1.value);
// subject1.error(new Error('broken'));
// try {
//   console.log(subject1.value);
// } catch (e) {
//   console.error(e);
// }

// const subject2 = new BehaviorSubject(2);
// console.log(subject2.value);
// subject2.unsubscribe();
// console.log(subject2.value);
const sub: BehaviorSubject<number> = new BehaviorSubject<number>(0);

sub.next(1);
sub.subscribe(x => {
  console.log('Subscriber A', x);
});
sub.next(2); // OUTPUT => Subscriber A 2
sub.subscribe(x => {
  console.log('Subscriber B', x);
});
sub.next(3); // OUTPUT => Subscriber A 3, Subscriber B 3 (logged from both subscribers)

//const subject = new BehaviorSubject(123);
// two new subscribers will get initial value => output: 123, 123
// subject.subscribe(d => console.log(d));
// subject.subscribe(console.log);

// // two subscribers will get new value => output: 456, 456
// subject.next(456);

// // new subscriber will get latest value (456) => output: 456
// subject.subscribe(console.log);

// // all three subscribers will get new value => output: 789, 789, 789
// subject.next(789);

// output: 123, 123, 456, 456, 456, 789, 789, 789