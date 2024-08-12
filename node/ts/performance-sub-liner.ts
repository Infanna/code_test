let arraySub: { key: string; value: number[] }[] = [
  { key: "ODD", value: [] },
  { key: "EVEN", value: [] },
];

let listSub: number[] = [];
const times: number[] = [];
const countNumber = 1000000;

function setItemSubLiner() {
  arraySub = [
    { key: "ODD", value: [] },
    { key: "EVEN", value: [] },
  ];
  for (let i = 1; i < countNumber; i++) {
    if (i % 2 === 0) {
      arraySub.find((item) => item.key === "EVEN")?.value.push(i);
    } else {
      arraySub.find((item) => item.key === "ODD")?.value.push(i);
    }
  }
}

function pushSubData(arraySub: { key: string; value: number[] }[]) {
  listSub = [];
  arraySub.forEach((item) => {
    item.value.forEach((subItem) => {
      listSub.push(subItem);
    });
  });
}

for (let i = 0; i < 10; i++) {
  setItemSubLiner();
  let startTime = performance.now();
  pushSubData(arraySub);
  let endTime = performance.now();
  times.push(endTime - startTime);

  console.log(
    `Call to linearAndSubLiner took ${endTime - startTime} milliseconds`
  );
}

function getAverage(arrayIn: number[]) {
  let sum = 0;
  for (let i = 0; i < arrayIn.length; i++) {
    sum += arrayIn[i];
  }
  return sum / arrayIn.length;
}

console.log(getAverage(times));
