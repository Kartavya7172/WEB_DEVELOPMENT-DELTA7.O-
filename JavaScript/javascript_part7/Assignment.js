//Q1
let arrayAverage = (arr) => {
    let sum =0;
    for(let i=0;i<arr.length;i++)
    {
      sum = sum+arr[i];
    }
    return sum/arr.length;
}

let ans = arrayAverage([2,3,4,1,5]);
console.log(ans);

//Q2
let even = (num1) => {
   if(num1%2 == 0)
   {
     return true;
   }else{
    return false;
   }
}

let ans1 = even(4);
if(ans1 == true)
{
  console.log("It is even");
}
else
{
    console.log("Not even")
}
const object = {
  message: 'Hello, World!',
  logMessage() {
    console.log(this.message);
  }
};
setTimeout(object.logMessage,1000);