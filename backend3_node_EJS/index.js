const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

//serving the static files
// app.use(express.static(path.join(__dirname,"public")));

//making tow path for css and js
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/JS")));
//serving the static files

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

//making instagram ejs
app.get("/ig/:username",(req,res)=>{
   //This is using the normal data
    // const followers = ["kartavya","shaurya","Alice","Bob","Shine"];
    let{ username } = req.params;
  
  //Using the data.json file for the data
    const instadata = require("./data.json");
    const data = instadata[username];
    if(data){
        res.render("instagramss",{data});
    }else{
        res.render("error.ejs");
    }
})

app.listen(port,()=>{
    console.log(`Listening on the port ${port}`);
});