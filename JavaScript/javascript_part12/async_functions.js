async function greet(){
    //Error
    //xyz.xyz();

    //Throw function throw error
    throw "some random error";
    return "hello world!";
}

// let hello = greet();
// console.log(hello);

//using then and catch with async function
greet()
   .then((result) => {
       console.log("promise was resolved");
       console.log("Result was:",result);
   })
   .catch((err) => {
      console.log("Promise was rejected with err",err);
   });

//making the arrow function as async
let sum = async() => 1+2;


let ans = sum();
console.log(ans);