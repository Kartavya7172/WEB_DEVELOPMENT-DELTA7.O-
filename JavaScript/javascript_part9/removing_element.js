let p = document.querySelector('p');
let btn1 = document.createElement("button");
p.insertAdjacentElement("beforebegin",btn1);
btn1.innerText = "clic Me!";
// //using remove child
// let body = document.querySelector("body");
// body.removeChild(btn1);

//using remove
btn1.remove();
