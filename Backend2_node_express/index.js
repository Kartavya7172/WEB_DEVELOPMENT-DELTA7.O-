const express = require("express");
const app = express();
//for 3000
// let port = 3000;

//for 8080
let port = 8080;

app.listen(port,()=>{
  console.log(`app is listening on port ${port}`);
});