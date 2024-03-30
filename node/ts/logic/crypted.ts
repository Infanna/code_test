import { createCipheriv, createDecipheriv, scrypt } from "crypto";
import { promisify } from "util";

async function test() {
  const iv = Buffer.from([
    200, 55, 111, 113, 159, 116, 42, 119, 143, 111, 26, 147, 52, 159, 239, 175,
  ]);

  const password =
    "DvWneD5dD8oQYIR7YVXJWD3xtU8WV1kPqWe9XEWUaHMwzjbfPe9pyDvsTnLHELDaw1tJcplk2pHGG8dlz9zayggJ45boHX51kKqp";
  const local =
    "3292991192794382243202739846476592775358594699689285294234224333457617758687507010662708820365066399";
  const dev =
    "GCrYYDxsjqqmpLCGxq9dMvsYkBSlZfG0aWjoiXDykti0uIKvyoBAqF4uUsXOd5MliszYlTV0ifoKt7gMxW378YFJ2bQ5DRsmUykO";
  const sit =
    "OvIQ3nfFkqkobZpf1Ora6jisMQkYqdH8UoStFbjYrVVonsZWssBYvWGjgyVxjqncNTuXCcrgmSweOyumzs5vT2rSk8DJp7AekXr3";
  const prod =
    "s4KFUBe0RxZ3RYc3lsN1ijGMu89zTYWlIhsdpBvZWxKmWxcC79cIQhWyUTi5zJqMiUurqVqFaTY0U0tEMfzPbuauE1epgsanwsaU";

  const key = (await promisify(scrypt)(password, "salt", 32)) as Buffer;
  const cipher = createCipheriv("aes-256-ctr", key, iv);

  const textToEncrypt = prod;
  const encryptedText = Buffer.concat([
    cipher.update(textToEncrypt),
    cipher.final(),
  ]);

  const array2Base64 = encryptedText.toString("base64");

  const encryptedTextDecode = Buffer.from(array2Base64, "base64");

  const decipher = createDecipheriv("aes-256-ctr", key, iv);
  const decryptedText = Buffer.concat([
    decipher.update(encryptedTextDecode),
    decipher.final(),
  ]);

  console.log({
    array2Base64: array2Base64,
    decryptedText: decryptedText.toString(),
  });
}

test();
