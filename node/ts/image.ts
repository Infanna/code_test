function convert() {
  let data = "1vhx";
  data = atob(data);

  console.log("data", data.length);
  console.log("data", data[0]);
  console.log("data", data[1]);
  console.log("data", data[2]);
  console.log("data", data[3]);

  let char1 = data.charCodeAt(0);
  let char2 = data.charCodeAt(1);
  let char3 = data.charCodeAt(2);
  let char4 = data.charCodeAt(3);

  console.log("char1", char1);
  console.log("char2", char2);
  console.log("char3", char3);
  console.log("char4", char4);

  let data3 = new Uint8Array([char1, char2]);

  console.log("data", data3);

  console.log("Ö".charCodeAt(0));
}

convert();

function base64ToBlob(base64: string, contentType: string): Blob {
  const byteCharacters = atob(base64);
  const byteNumbers: number[] = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: contentType });
}
