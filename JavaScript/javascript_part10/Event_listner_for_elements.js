let para = document.querySelector("p");

para.addEventListener("click",function(){
    console.log("Para was clicked");
})

let div1 = document.querySelector(".box");
div1.addEventListener("mouseenter",function(){
   console.log("Mouse is Hover on div");
});