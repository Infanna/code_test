import { BehaviorSubject } from 'rxjs';

// const subject1 = new BehaviorSubject(1);
// console.log(subject1.value);
// subject1.error(new Error('broken'));
// try {
//   console.log(subject1.value);
// } catch (e) {
//   console.error(e);
// }

const subject2 = new BehaviorSubject(2);
console.log(subject2.value);
subject2.unsubscribe();
try {
  console.log(subject2.value);
} catch (e) {
  console.error(e);
}