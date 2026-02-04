//Q1
let body1 = document.querySelector("body");

let input1 = document.createElement("input");
input1.setAttribute("type","text");
body1.append(input1);

let btn = document.createElement("button");
btn.innerText = "Click me";
body1.append(btn);

//Q2
input1.setAttribute("placeholder","Username");
btn.setAttribute("id","btn");

//Q3
let butn = document.querySelector("#btn");
butn.classList.add("btndeco");

//Q4
let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.classList.add("h1dec");
body1.prepend(h1);

//Q5
let p = document.createElement("p");
p.innerHTML = "Apna college <b>Delta</b> Practice";
body1.append(p);