// Import the necessary functions from the RxJS library
import { filter, interval, take } from 'rxjs';
import { firstValueFrom, lastValueFrom } from 'rxjs';

// Create an observable that emits values every 1 second
const observable = interval(1000);
async function demo() {
  try {
    // Using firstValueFrom to get the first emitted value
    const firstValue = await firstValueFrom(observable);
    console.log('First value:', firstValue);

    // Using lastValueFrom to get the last emitted value after a certain period
    const lastValue = await lastValueFrom(observable.pipe(take(5))); // Take only 5 values
    console.log('Last value from the first 5 values:', lastValue);
  } catch (error) {
    console.error('Error:', error);
  }
}
demo();

// Create an observable that emits values including null and undefined
const observable2 = interval(1000).pipe(
  // Simulate emitting null and undefined values
  filter(value => value % 2 == 0 && value == 6),
);
async function demo2() {
  try {
    // Using firstValueFrom with filtering to get the first non-null and non-undefined value
    const firstNonNullOrUndefinedValue = await firstValueFrom(observable2.pipe(
      filter(value => value !== null && value !== undefined),
    ));
    console.log('First non-null and non-undefined value:', firstNonNullOrUndefinedValue);
  } catch (error) {
    console.error('Error:', error);
  }
}
demo2();

