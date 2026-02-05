// const math = require("./math.js");
// console.log(math.sum(2,3));
// console.log(math.PI);


//accessing from the another directory
// const info = require("./Fruits");
// console.log(info);


//written to check the globally install figlet
const figlet = require("figlet");

figlet("KARTAVYA SUDARSHAN TONPE", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});