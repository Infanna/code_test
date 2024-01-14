import { createClient } from "redis";

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomNumber() {
  return Math.floor(Math.random() * 1000);
}

async function connect() {
  const client = createClient();

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();
  return client;
}

async function setkey(client: any, time: number, host: number) {
  await sleep(time);
  const value = `(${host}): ${time}`;
  console.log(value);
  await client.set("key", value);
}

async function redis() {
  const client = await connect();
  setkey(client, randomNumber(), 1);
  setkey(client, randomNumber(), 2);
  setkey(client, randomNumber(), 3);
  await sleep(1000);
  const value = await client.get("key");
  console.log("value", value);
}

redis();

// async function hostName1() {
//   const num = Math.floor(Math.random() * 1000);
//   console.log("hostName1", num);
//   await sleep(num);
//   text.key = 1;
// }
