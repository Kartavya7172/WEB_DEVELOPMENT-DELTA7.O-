//style for image
let img = document.querySelector("img");
console.log(img.style);
// img.style.display = "none";

//style for heading
let head = document.querySelector("h1");
console.log(head.style);
head.style.color = "red";
head.style.backgroundColor = "yellow";

//Style for the anchor tag in div
let divanchor = document.querySelectorAll("div a");

//first way
for(let i=0;i<divanchor.length;i++)
{
    divanchor[i].style.color = "red";
}

//second way
for(link of divanchor){
    link.style.color = "green";
}