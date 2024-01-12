import { createCipheriv, createDecipheriv, scrypt } from "crypto";
import { promisify } from "util";

async function test() {
  const iv = Buffer.from([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ]);

  const password =
    "9593438667734399199910675238091027246277363238197309521544042666518529129363388713175473532241091816";
  const local =
    "3292991192794382243202739846476592775358594699689285294234224333457617758687507010662708820365066399";

  const key = (await promisify(scrypt)(password, "salt", 32)) as Buffer;
  const cipher = createCipheriv("aes-256-ctr", key, iv);

  const textToEncrypt = local;
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
