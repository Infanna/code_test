// let text = {
//   key: 0,
// };

// // async function hostName1() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(resolve, 100, "1");
// //   });
// // }
// // async function hostName2() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(resolve, 200, "2");
// //   });
// // }
// // async function hostName3() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(resolve, 50, "3");
// //   });
// // }

// // function print() {
// //   Promise.all([hostName1(), hostName2(), hostName3()]).then((x) => {
// //     console.log(x);
// //   });
// //   console.log("text", text);
// // }

// // print();

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// async function hostName1() {
//   const num = Math.floor(Math.random() * 1000);
//   console.log("hostName1", num);
//   await sleep(num);
//   text.key = 1;
// }

// async function hostName2() {
//   const num = Math.floor(Math.random() * 1000);
//   console.log("hostName2", num);
//   await sleep(num);
//   text.key = 2;
// }
// async function hostName3() {
//   const num = Math.floor(Math.random() * 1000);
//   console.log("hostName3", num);
//   await sleep(num);
//   text.key = 3;
// }

// function checkhostName1(num) {
//   console.log("host1", num === 1);
// }
// function checkhostName2(num) {
//   console.log("host2", num === 2);
// }
// function checkhostName3(num) {
//   console.log("host3", num === 3);
// }

// async function print() {
//   hostName1();
//   hostName2();
//   hostName3();
//   await sleep(1000);
//   console.log("text", text);

//   checkhostName1(text.key);
//   checkhostName2(text.key);
//   checkhostName3(text.key);

//   // Promise.all([hostName2(), hostName3()]).then((x) => {

//   // });
//   // console.log("text");
// }

// print();
// // const resolvedPromisesArray = [test2(2000), test2(1000)];

// // const p = Promise.all(resolvedPromisesArray);
// // // Immediately logging the value of p
// // console.log(p);

// // // Using setTimeout, we can execute code after the queue is empty
// // setTimeout(() => {
// //   console.log("the queue is now empty");
// //   console.log(p);
// // });

function testR() {
  // let c = true;
  // let array = [];
  // var crypto = require("crypto");
  // let number = 0;

  // while (c) {
  //   var id = crypto.randomBytes(20).toString("hex");
  //   if (array.find((e) => e == id)) {
  //     c = false;
  //   } else {
  //     array.push(id);
  //   }
  //   console.log("id", `(${number}): ${id}`);
  //   number++
  //   sleep(1000);
  // }
  var crypto = require("crypto");
  let myuuid = crypto.randomUUID();

  console.log("Your UUID is: " + myuuid);
}

testR();
