let imgobj = document.querySelector("img");
console.log(imgobj.classList);

//manipulating the classlist

//to add the class we do as
//Take example of heading

let head = document.querySelector("h1");
head.classList.add("green");
console.log(head.classList);

//multiple class can also be added
head.classList.add("underline","font");
console.log(head.classList);

//to remove the property 
head.classList.remove("green");

//to check if the class exist or not
console.log(head.classList.contains("green")); //false
console.log(head.classList.contains("underline"));//true

//toggle
console.log(head.classList.toggle("green")); // true when class is not present but i gets add 
console.log(head.classList.toggle("underline")); //false when class is present and i gets removed

//to chnage the backgroung color of the box
let boxe = document.querySelector(".box");
boxe.classList.add("boxcolor");