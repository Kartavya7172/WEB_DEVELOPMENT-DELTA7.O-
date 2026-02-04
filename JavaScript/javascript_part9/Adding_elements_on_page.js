let newp = document.createElement('p');
console.dir(newp);

newp.innerText = "Hi i am new p";

//using appendChild
let body = document.querySelector("body");
body.appendChild(newp);

//creating btn
let btn = document.createElement('button');
console.dir(btn);
btn.innerText = "Click me!"
body.appendChild(btn);

//using append
newp.append("I am appended");
newp.append(btn);

//using prepend
//it add at the start
let box = document.querySelector(".box");
box.prepend(newp);

//using insertAdjacent(postion,element);
let btn1 = document.createElement("button");
let p = document.querySelector('p');
btn1.innerText = "click Me!";

p.insertAdjacentElement("beforebegin",btn1);
p.insertAdjacentElement("afterbegin",btn1);
p.insertAdjacentElement("beforeend",btn1);
p.insertAdjacentElement("afterend",btn1);

