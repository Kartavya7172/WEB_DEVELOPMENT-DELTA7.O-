let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    //to prevent default operations
    event.preventDefault();
    alert("Form Submitted");
});