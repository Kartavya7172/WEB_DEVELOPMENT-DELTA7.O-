const express = require("express");
const app = express();
//for 3000
// let port = 3000;

//for 8080
let port = 8080;

app.listen(port,()=>{
  console.log(`app is listening on port ${port}`);
});

app.use((req,res)=>{
  console.log("request recevied");
//   res.send("This is the basic response");

  //sending the object in response
//   res.send({
//     name:"apple",
//     color:"balck",
//   })

  //sending the html page
  let code = "<h1>Fruits</h1><ul><li>Orange</li><li>Mango</li></ul>"
  res.send(code);
});