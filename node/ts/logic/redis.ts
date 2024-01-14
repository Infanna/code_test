import { createClient } from "redis";

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function random() {
  const crypto = require("crypto");
  const uuid = crypto.randomUUID();
  return uuid;
}

async function connect() {
  const client = createClient();

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();
  return client;
}

async function setkey(client: any, number: number, host: number) {
  await sleep(Math.floor(Math.random() * 10));
  const value = `(${host}): ${number}`;
  console.log(value);
  await client.set(
    "/DTWS/api/productCrossSell/v1/queryProductCrossSelling",
    value
  );
  return host;
}

async function redis() {
  const client = await connect();
  Promise.all([
    setkey(client, random(), 1),
    setkey(client, random(), 2),
    setkey(client, random(), 3),
  ]);

  await sleep(100);
  const value = await client.get(
    "/DTWS/api/productCrossSell/v1/queryProductCrossSelling"
  );
  console.log("value", value);
}

redis();
