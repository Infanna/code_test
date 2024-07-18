
function searchItemsByKeyword(keyword, itemList) {
  const keywords = keyword.match(/[a-zA-Z]+|\d+/g).map((e) => e.toLowerCase());
  itemList = itemList.map((e) => e.toLowerCase());
  console.log("keywords", keywords);

  const matchingItems = [];

  itemList.forEach((item) => {
    // const re = new RegExp(`^${keywords[0].toLowerCase()}`, "i");
    // const start = re.test(item);
    // console.log(re);
    // console.log(item);
    // console.log(start);
    let index = -1;
    console.log("index", index);
    const isMatch = keywords.every((key) => {
      const match = item.includes(key);
      const indexString = item.indexOf(key);

      console.log("indexString", indexString);

      const indexMatch = indexString > index;
      if (indexMatch) {
        index = indexString;
      }

      return indexMatch && match;
    });
    if (isMatch) {
      matchingItems.push(item);
    }
  });

  console.log("Data in DB ==>", itemList);
  console.log("Search by  ==>", keyword);
  console.log("Result     ==>", matchingItems);
  console.log(
    "======================================================================"
  );
}

const keyword = "IP12";
const itemList = [
  "Iphone 12 pro max",
  "Iphone 12 pro",
  "Iphone 13",
  "Iphone 12",
  "HUNWEI",
  "12 iphone",
];
searchItemsByKeyword(keyword, itemList);

// const keyword4 = "Iphone 12";
// searchItemsByKeyword(keyword4, itemList);

// const keyword2 = "Iphone 12 pro max";
// searchItemsByKeyword(keyword2, itemList);

// const keyword3 = "max12pro";
// searchItemsByKeyword(keyword3, itemList);
