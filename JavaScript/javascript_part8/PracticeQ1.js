//check all numbers in array are multiple of 10 or not
let arr = [10,10,250,70,60,20];
let ans = arr.every( (res,le) => (
       res%10 == 0
));
console.log(ans);

//To find the minimum number in array
let arr1 = [-1,0,1,2,3,23,2,2,2,31,4,36,467,5,87,5];
let min = arr1.reduce( (res,el) => {
    if(el<res)
    {
        return el;
    }else{
        return res;
    }
});
console.log(min);