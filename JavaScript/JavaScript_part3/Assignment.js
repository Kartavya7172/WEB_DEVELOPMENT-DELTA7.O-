//Q1
// let arr = [1,2,3,113,342,53,2123,344,24];
// let n = prompt("Enter the number of n");
// console.log(arr.slice(0,n));

//Q2
// let brr = [1,2,3,113,342,53,2123,344,24];
// let m = prompt("Enter the number of n");
// console.log(brr.slice(-m));

//Q3
let string = " ";
if(string.length == 0)
{
    console.log("String is blank");
}else{
    console.log("String is not blank");
}

//Q4
let str = "kaRtavya";
let i = 2;
if(str[i] >='a' && str[i] <'z')
{
    console.log("Yes");
}else{
    console.log("No");
}

//Q5
let str2 = "     hello    ";
console.log(str2.trim());

//Q6
let array = [1,3,1,31131,14242,25,53563,646,1,1,436,6,7,7];
if(array.includes(31131))
{
    console.log("Yes");
}else{
    console.log("No");
}