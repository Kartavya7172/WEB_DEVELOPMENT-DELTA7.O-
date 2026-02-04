//Q1
// let array = [1,2,3,4,5,6,2,3];
// let num = prompt("Enter the number to remove");
// num = parseInt(num);
// while(array.includes(num))
// {
//     let i=array.indexOf(num);
//     array.splice(i,1);
// }

// console.log(array);

//Q2
let num1 = 532;
let icnt =0;
while(num1 != 0)
{
    num1 = Math.floor(num1/10);
    icnt++;
}
console.log(icnt);

//Q3
let num2 = parseInt(532);
let sum =0;
let digit =0;
while(num2 > 0)
{
    digit = num2%10;
    sum = sum+digit;
    num2 = Math.floor(num2/10);
}
console.log(sum);

//Q4
let num3 = 0;
let fact = 1;
while(num3 > 0)
{
    fact = fact*num3;
    num3--;
}
console.log(fact);


//Q5
let array = [1,31,3,13,4242,5335,242,36,646,86];
let max = -1;
for(num of array)
{
    if(num > max)
    {
        max = num;
    }
}
console.log(max);