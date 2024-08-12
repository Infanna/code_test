let array: number[] = [];

let list: number[] = [];

const times: number[] = [];

const count = 1000000;

function setItemLiner() {
  array = [];
  for (let i = 1; i < count; i++) {
    array.push(i);
  }
}

function pushData(arrayInput: number[]) {
  list = [];
  arrayInput.forEach((item) => {
    list.push(item);
  });
}

for (let i = 0; i < 10; i++) {
  setItemLiner();
  let startTime = performance.now();
  pushData(array);
  let endTime = performance.now();
  times.push(endTime - startTime);

  console.log(`Call to linear took ${endTime - startTime} milliseconds`);
}

function getAverage(arrayIn: number[]) {
  let sum = 0;
  for (let i = 0; i < arrayIn.length; i++) {
    sum += arrayIn[i];
  }
  return sum / arrayIn.length;
}

console.log(getAverage(times));
