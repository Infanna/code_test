var jwt = require("jsonwebtoken");

function generateToken(payload: any, secret: string): string {
  return jwt.sign(payload, secret);
}

function verifyToken(token: string, secret: string): string {
  return jwt.verify(token, secret);
}

// const encryptedText = generateToken(
//   {
//     exp: 9999999999,
//   },
//   "@#6qL*o9R!z2sDxPvUyHm5gA1cF8jTbF"
// );
// console.log("token dev", encryptedText);

// const verify = verifyToken(encryptedText, "@#6qL*o9R!z2sDxPvUyHm5gA1cF8jTbF");
// console.log("token dev", verify);

// const encryptedText2 = generateToken(
//   {
//     exp: 9999999999,
//   },
//   "$%7aK!pX2b&n@5rL8eY*3sQ1uG9iH#4E"
// );
// console.log("token prod", encryptedText2);

// const verify2 = verifyToken(encryptedText2, "$%7aK!pX2b&n@5rL8eY*3sQ1uG9iH#4E");
// console.log("token prod", verify2);

const encryptedTextLocal = generateToken(
  {
    exp: 9999999999,
  },
  "@#6qL*o9R!z2sDxPvUyHm5gA1cF8jTbF"
);
console.log("encryptedTextLocal", encryptedTextLocal);

const verifyLocal = verifyToken('encryptedTextLocal', "@#6qL*o9R!z2sDxPvUyHm5gA1cF8jTbF");
console.log("token prod", verifyLocal);