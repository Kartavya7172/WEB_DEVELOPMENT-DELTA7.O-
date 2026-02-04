let body = document.querySelector("body");

//a <p> with red text says "Hey I'm red"
let newp = document.createElement('p');
newp.innerText = "Hey I'm red!";
body.append(newp);
newp.classList.add("red");

//an <h3> with blue text that says "I'm a blue h3"
let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3!";
body.append(h3);
h3.classList.add("blue");

//a<div> with black border and pink background color with the following element inside it:
//another <h1> that says "I'm in a div"
//a <p> that says "ME TOO!"
let div2 = document.createElement("div");
div2.classList.add("div1");
let h1 = document.createElement("h1");
h1.innerText = "I'm in a div"

let p = document.createElement("p");
p.innerText = "ME TOO";

body.prepend(div2);
div2.append(h1);
div2.append(p);

