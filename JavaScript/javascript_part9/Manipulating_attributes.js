let img = document.querySelector("img");

// to get the attribute
let id = img.getAttribute("id");
console.log(id);

//to set the attribute
img.setAttribute("id","main1img");
console.log(img.getAttribute("id"));

//change the src attribute
let imgsrc = img.getAttribute("src");
img.setAttribute("src","assets/creation_3.jpeg");

//settting class attribute to image
img.setAttribute("class","image");
console.log(img.getAttribute("class"));
//img.setAttribute("width","20");