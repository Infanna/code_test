// RxJS v6+
import { Subject } from 'rxjs';

const sub = new Subject();

sub.next(1);
sub.subscribe(x => {
  console.log('Subscriber A', x);
});
sub.next(2); // OUTPUT => Subscriber A 2
sub.subscribe(x => {
  console.log('Subscriber B', x);
});
sub.next(3); // OUTPUT => Subscriber A 3, Subscriber B 3 (logged from both subscribers)