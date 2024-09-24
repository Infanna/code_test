// function myFunction(age, test) {
//   console.log(this.name);
//   console.log("age", age);
//   console.log("test", test);
// }

// const obj1 = { name: "A", myFunction };
// const obj2 = { name: "B", myFunction };

// const array = [obj1.myFunction, obj2.myFunction];

// array.forEach((item) => {
//   item.call(this, 25, 2);
//   item.arguments[1] = 5;
// });

const x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}