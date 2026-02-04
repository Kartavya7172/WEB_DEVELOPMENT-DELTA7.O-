let form = document.querySelector("form");
form.addEventListener("submit",function(event){
   event.preventDefault();
});

let input = document.querySelector("#user");

//change event
input.addEventListener("change",function(){
    console.log("change event");

});
//input event
input.addEventListener("input",function(){
    console.log("input event")
});