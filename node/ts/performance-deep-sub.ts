let arrayDeepSub: {
  key: string;
  value: { key2: string; value2: { key3: string; value3: number[] }[] }[];
}[] = [
  {
    key: "ODD",
    value: [
      { key2: "10000", value2: [{ key3: "value", value3: [] }] },
      { key2: "100000", value2: [{ key3: "value", value3: [] }] },
    ],
  },
  {
    key: "EVEN",
    value: [
      { key2: "10000", value2: [{ key3: "value", value3: [] }] },
      { key2: "100000", value2: [{ key3: "value", value3: [] }] },
    ],
  },
];
let listDeepSub: number[] = [];
const times: number[] = [];
const countNumber = 1000000;

function setItemDeepSubLiner() {
  arrayDeepSub = [
    {
      key: "ODD",
      value: [
        { key2: "10000", value2: [{ key3: "value", value3: [] }] },
        { key2: "100000", value2: [{ key3: "value", value3: [] }] },
        { key2: "999999999", value2: [{ key3: "value", value3: [] }] },
      ],
    },
    {
      key: "EVEN",
      value: [
        { key2: "10000", value2: [{ key3: "value", value3: [] }] },
        { key2: "100000", value2: [{ key3: "value", value3: [] }] },
        { key2: "999999999", value2: [{ key3: "value", value3: [] }] },
      ],
    },
  ];
  for (let i = 1; i < countNumber; i++) {
    if (i % 2 === 0) {
      arrayDeepSub
        .find((item) => item.key === "EVEN")
        .value.forEach((subItem) => {
          if (i < Number(subItem.key2)) {
            subItem.value2[0].value3.push(i);
            return;
          }
        });
    } else {
      arrayDeepSub
        .find((item) => item.key === "ODD")
        .value.forEach((subItem) => {
          if (i < Number(subItem.key2)) {
            subItem.value2[0].value3.push(i);
            return;
          }
        });
    }
  }
}

function pushDeepSubData(
  arraySubDeep: {
    key: string;
    value: { key2: string; value2: { key3: string; value3: number[] }[] }[];
  }[]
) {
  listDeepSub = [];
  arraySubDeep.forEach((item) => {
    item.value.forEach((subItem) => {
      subItem.value2.forEach((subSubItem) => {
        subSubItem.value3.forEach((subSubSubItem) => {
          listDeepSub.push(subSubSubItem);
        });
      });
    });
  });
  console.log("listDeepSub", listDeepSub.length);
}

for (let i = 0; i < 10; i++) {
  setItemDeepSubLiner();
  let startTime = performance.now();
  pushDeepSubData(arrayDeepSub);
  let endTime = performance.now();
  times.push(endTime - startTime);

  console.log(
    `Call to linearAndSubLinerAndSubDeep took ${
      endTime - startTime
    } milliseconds`
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
