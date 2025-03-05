type Compare = <T, F>(fn: (x: T) => F) => (a: T, b: T) => boolean;

const compare: Compare = <T, F>(fn: (x: T) => F) => (a: T, b: T): boolean => fn(a) > fn(b);

function testFn() {
  const compareNumber = compare<number, number>((n) => n);
  const compareValueNumberOfString = compare<string, number>(Number);
  const compareASCII = compare<string, string>((n) => n);
  const compareTextLength = compare<string, number>((n) => n.length);

  console.log("compareNumber", compareNumber(3, 2));
  console.log("compareValueNumberOfString", compareValueNumberOfString("13", "9"));
  console.log('compareASCII', compareASCII('13', '9'));
  console.log('compareASCII2', compareASCII('B', 'A'));
  console.log('compareASCII3', compareASCII('A', 'B'));
  
  console.log("compareTextLength", compareTextLength("few", "sssss"));
  console.log("compareValueNumberOfString", compareValueNumberOfString("few", "sssss"));
  

  const shortCompareTextLength = compare<string, number>((n) => n.length)('few', 'za');
  console.log('shortCompareTextLength', shortCompareTextLength);
  
  const compose = <A, B, C>(f: (b: B) => C, g: (a: A) => B) => (a: A): C => f(g(a));

// ใช้ compare ร่วมกับ compose
const compareTextLength3 = compare<string, number>(compose<string, number, number>(Number, (n) => n.length));

console.log(compareTextLength3("few", "sssss")); // false
console.log(compareTextLength3("hello", "hi")); // true
  
}

testFn();

