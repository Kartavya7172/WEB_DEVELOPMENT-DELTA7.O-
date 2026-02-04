let sum = 54;//Global scope

function sum1(num1,num2){
    let sum = num1+num2;//Function scope
}
sum1(1,2);
console.log(sum);

