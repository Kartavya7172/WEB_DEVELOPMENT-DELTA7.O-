const express = require("express");
const app = express();
//for 3000
// let port = 3000;

//for 8080
let port = 8080;

app.listen(port,()=>{
  console.log(`app is listening on port ${port}`);
});

// app.use((req,res)=>{
//   console.log("request recevied");
//   res.send("This is the basic response");

  //sending the object in response
//   res.send({
//     name:"apple",
//     color:"balck",
//   })

//   //sending the html page
//   let code = "<h1>Fruits</h1><ul><li>Orange</li><li>Mango</li></ul>"
//   res.send(code);
// });

//using .get method
app.get("/" ,(req,res) => {
  res.send("You contacted root path");
});

// app.get("/apple" ,(req,res) => {
//   res.send("You contacted apple path");
// });

// app.get("/orange" ,(req,res) => {
//   res.send("You contacted orange path");
// });

// // This matches everything including the root /
// app.get('/{*catchall}', (req, res) => {
//   res.send("This path does not exist");
// });

// //sending the post request
// app.post("/",(req,res)=>{
//    res.send("You send the post request to the server")
// })


//PATH PARAMETERS lecture
//sending the path parameters
// app.get("/:username/:id", (req,res)=>{
//    console.log(req.params);
//    res.send("Hello i am root");
// })

//also we can store the parameters as:-
// app.get("/:username/:id", (req,res)=>{
//    let {username, id} = req.params;
//    res.send(`Welcome to the page of @${username}`);
// })

//also send the html code as
// app.get("/:username/:id", (req,res)=>{
//   let{username,id} = req.params;
//   let html = `<h1 style = "color:red">Welcome to the page of @${username}.</h1>`;
 
//   res.send(html);
// })

//Query string
// app.get("/search",(req,res)=>{
//   console.log(req.query);
//   res.send("no results");
// });

//extracting value from the query parameters
app.get("/search",(req,res) => {
  let { q } = req.query;
  if(!q){
    res.send("Nothing Search!");
  }
  res.send(`Search result for Query is${q}`);
})