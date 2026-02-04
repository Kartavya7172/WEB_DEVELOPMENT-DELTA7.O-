//for heading 
let h4 = document.querySelector("h4");

//for parents
console.log(h4.parentElement);

//for children
console.log(h4.children);

//for div
let divobj = document.querySelector(".box");
console.log(divobj.children);

//previous and next siblings
let sib = document.querySelector('img');
let prev = sib.previousElementSibling;
console.log(prev);
prev.style.color = "red";

//next sib
let next = sib.nextElementSibling;
console.log(next);
