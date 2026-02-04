//if no value is pass
function sum(a,b=2)
{
    return a+b;
}
let ans = sum(2);
console.log(ans);

//if value also pass
function sum1(a1,b1=2)
{
    return a1+b1;
}
let ans1 = sum1(2,3);
console.log(ans1);