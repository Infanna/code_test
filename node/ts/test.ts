function testx() {
  var date = new Date();

  // // create a DateTimeFormat object with specific options
  // var dateFormat = new Intl.DateTimeFormat("en-US", {
  //   timeZone: "America/New_York",
  // });

  const result = date.toLocaleDateString('th-TH', {
  })

  // use the format() method to display the date and time in the specified format
  // (e.g. "12/8/2020, EST")
  // const formatted = dateFormat.format(date);
  console.log("xx", result);
}

testx();
