let btns = document.querySelectorAll("button");
for(btn of btns){

//   btn.onclick = print;
//   btn.onclick = sayhello;

   //eventlisteners
//    btn.addEventListener("click",print);
//    btn.addEventListener("click",sayhello);
   btn.addEventListener("dblclick",saybye);
  }


function print(){
    alert("Hello");
}
function sayhello(){
    console.log("Hello World");
}
function saybye(){
    console.log("BYE");
}