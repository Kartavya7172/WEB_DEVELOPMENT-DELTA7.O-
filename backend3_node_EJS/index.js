const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
   res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("Hello");
});

//Making new route Passing data to EJS
app.get("/rolldice",(req,res)=>{
    let diceval = Math.floor(Math.random()*6)+1;
   res.render("rolldice.ejs",{num:diceval});
})

app.listen(port,()=>{
    console.log(`Listening on the port ${port}`);
});