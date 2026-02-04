// let button = document.querySelector("button");
// button.addEventListener("click",function(){
//     console.dir(this);
//     this.style.backgroundColor = "red";
// })

//to handle mutiple elements
let button = document.querySelector("button");
let h3 = document.querySelector("h3");
let para = document.querySelector("p");
let h1 = document.querySelector("h1");

function changecolor(){
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}

button.addEventListener("click",changecolor);
h3.addEventListener("click",changecolor);
para.addEventListener("click",changecolor);
h1.addEventListener("click",changecolor);