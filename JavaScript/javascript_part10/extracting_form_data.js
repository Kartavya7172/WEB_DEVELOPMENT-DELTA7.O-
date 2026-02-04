let form = document.querySelector("form");
form.addEventListener("submit",function(event){
   event.preventDefault();

//    let input = document.querySelector("input");
//    console.dir(input);
//    console.log(input.value);
     
     let user = document.querySelector("#user"); 
     let pass = document.querySelector("#pass");
     console.log(user.value); //same as doing    console.log(form.elements[0].value);
     console.log(pass.value); //same as doing    console.log(form.elements[1].value);
     alert(`Hi ${user.value} your password is set to ${pass.value}`);

     //accessing form element using the form object
     console.dir(form);
     //after printing the form object we see the collection name as elemene in which ele
     //ments are stored at the index
     console.log(form.elements[0].value);
     console.log(form.elements[1].value);
       alert(`Hi ${form.elements[0].value} your password is set to ${form.elements[1].value}`);
})