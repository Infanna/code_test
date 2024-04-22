import { handset } from "./handset/handsetData2data";
import * as fs from "fs";

function format() {
  const count = 200;

  let n = handset.length / count;
  for (let i = 0; i < n; i++) {
    const formetData = handset.slice(i * count, (i + 1) * count);
    const data = JSON.stringify(formetData);
    fs.writeFile("data" + i.toString() + ".json", data, (error) => {
      // throwing the error
      // in case of a writing problem
      if (error) {
        // logging the error
        console.error(error);

        throw error;
      }

      console.log(`${i} written correctly`);
    });
  }
}
format();
