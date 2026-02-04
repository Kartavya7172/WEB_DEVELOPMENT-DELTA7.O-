//Q1
//mouseout
let input = document.querySelector("input");
// input.addEventListener("mouseout",function(){
//     alert("Mouse removed");
// });

//keypress
input.addEventListener("keypress",function(){
    console.log("Key is pressed");
});

//scroll
let scr = document.querySelector("textarea");
scr.addEventListener("scroll",function(){
    console.log("Mouse scroll");
});

//load
window.addEventListener("load",function(){
   setTimeout(() => {
     console.log("Apna college");
   },4000);
});

//Q2
let button = document.querySelector("button");
button.addEventListener("click",function(){
        this.style.backgroundColor = "green";
});

//Q3
let h2 = document.querySelector("h2");
let inp = document.querySelector("#inp");

inp.addEventListener("input",function(){
    this.value = this.value.replace(/[^a-zA-Z ]/g, "");
    h2.innerText = inp.value;
});