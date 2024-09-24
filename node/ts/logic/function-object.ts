function myFunction(age, test) {
  console.log(this.name);
  console.log("age", age);
  console.log("test", test);
}

function myFunction2(age, test) {
  console.log(this.name);
  console.log("age", age);
  console.log("test", test);
}

const obj1 = { name: "A", myFunction, myFunction2 };
const obj2 = { name: "B", myFunction, myFunction2 };

const array = [obj1.myFunction, obj2.myFunction];

// Call each function and pass the `this` context and the `age` parameter
array[0].call(obj1, 25, 2); // Output: "A", "age 25"
array[1].call(obj2, 30); // Output: "B", "age 30"

array[0].apply(obj1, [25, 2]); // Output: "A", "age 25"
array[1].apply(obj2, [30]); // Output: "B", "age 30"

const boundFunction1 = array[0].bind(obj1, 25, 2);
const boundFunction2 = array[1].bind(obj2, 30);

boundFunction1(); // Output: "A", "age 25"
boundFunction2(); // Output: "B", "age 30"
