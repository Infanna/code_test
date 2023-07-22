function getPromise() {
    var promise = new Promise((resolve) => {
      setTimeout(() => {
        console.log("Promise Executed...");
        resolve("Sample data");
      }, 1000); //execute in 1s
    });
  }

  function data() {
    var array = ["data1", "data2"];
    var promise = getPromise();
    console.log(array);
  }

  data();

function getPromise2() {
    var promise = new Promise((resolve) => {
        setTimeout(() => {
            console.log("Promise Executed...");
            resolve("Sample data");
        }, 1000); //execute in 1s
    });
}

async function data2() {
    var array = ["data1", "data2"];
    var promise = await getPromise2();
    console.log(array);
}

data2();

function getPromise3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Promise Executed...");
            resolve("Sample Data");
        }, 1000);
    });
}

// declaring async function
async function data3() {

    var array = ["data1", "data2"];
    var promise = await getPromise3();
    console.log(array);

}

data3();