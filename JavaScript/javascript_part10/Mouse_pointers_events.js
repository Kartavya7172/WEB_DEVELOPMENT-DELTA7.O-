let btns = document.querySelectorAll("button");


//for single button
// btns.onclick = function(){
//     alert("Button was clicked")
// }

//for multiple button
for(btn of btns){
  //onclick
  btn.onclick = print;

  //onmouse enter
  btn.onmouseenter = function(){
    console.log("Hello world");
  }
}

function print(){
    alert("Hello");
}