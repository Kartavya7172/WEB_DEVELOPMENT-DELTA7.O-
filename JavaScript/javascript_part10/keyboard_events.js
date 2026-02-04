//event argument
let btn = document.querySelector("button");
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("Button Clicked")
// });

//keyboard event;
//KEYPRESS
let input = document.querySelector("input");
// input.addEventListener("keypress",function(){
//     console.log("Key is presses");
// });

//KEYUP
// input.addEventListener("keyup",function(){
//     console.log("Key is up");
// });

//KEYDOWN
// input.addEventListener("keydown",function(){
//     console.log("Key is down");
// });

//printing keyboard event
input.addEventListener("keydown",function(event){
    // console.dir(event);

    //code and key
    console.log(event.key);
    console.log(event.code);
    // console.log("Key is down");

    if(event.code == "KeyW")
    {
        console.log("Character moves forward");
    }else if(event.code == "KeyS")
    {
        console.log("Character moves down");
    }else if(event.code == "KeyA")
    {
        console.log("Character moves left");
    }else if(event.code == "KeyD")
    {
        console.log("Character moves right");
    }
});


