let button = document.querySelector("button");
let input = document.querySelector("input");
let ul=document.querySelector("ul");

button.addEventListener("click",function(){
    let li = document.createElement("li");
    let delbtn = document.createElement("button");
    delbtn.innerText = "❌";
    delbtn.classList.add("delete");
    li.innerText =  input.value ;
    ul.appendChild(li);
    li.appendChild(delbtn);
 
});

//with enter
// input.addEventListener("keydown",function(event){
//    if(event.key == "Enter")
//    {
//        let li = document.createElement("li");
        
//        li.innerText =  input.value ;
//        ul.appendChild(li);
//    }
// });

//not work for the new buttons added
// let delete1 = document.querySelectorAll(".delete");
// for(del of delete1){
//     del.addEventListener("click",function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// }

ul.addEventListener("click",function(event){
    if(event.target.nodeName = "BUTTON"){
        let par = event.target.parentElement;
        par.remove();
    }
})