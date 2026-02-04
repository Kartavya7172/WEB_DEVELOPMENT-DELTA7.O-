function isadult(age){
   if(age>18)
   {
    return "adult";
   }else{
    return "not adult";
   }
}
let ans = isadult(21);
console.log(ans);

function sum(num1,num2){
    return (num1+num2);
    console.log("This statement will not get execute");
}
let s = sum(2,3);
console.log(s);