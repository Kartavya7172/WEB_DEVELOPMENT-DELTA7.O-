let arr = [1,2,3,8,4,5,6,7];
let max = arr.reduce((res,el) => {
    if(el>res)
    {
        return el;
    }else
    {
        return res;
    }

});
console.log(max);