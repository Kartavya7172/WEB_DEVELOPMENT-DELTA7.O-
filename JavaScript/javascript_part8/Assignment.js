//Q1
let squaresum = (array) => {
  let newarr = array.map((el) => el*el);
  let sum = newarr.reduce((res,el) => res+el);
  return sum/newarr.length;
};

let arr = [1,2,3];
let ans = squaresum(arr);
console.log(ans);

//Q2
let arr1 = [1,2,3,4,4];
let newarray = arr1.map( (el) => el+5);
console.log(newarray);


//Q3
let str = ["kartavya","shaurya","bob"];
let newstr = str.map( (el) => el.toUpperCase());
console.log(newstr);

//Q4
let doubleAndReturnArgs = (arr4,...args)=> {
   let newarr4 = arr4.map( (el) => el);
   let addarg = args.map( (el1) => el1*2);
    let all = [...newarr4,...addarg];
   return all;
}
let arr5 = [1,2,3,6];
let newa = doubleAndReturnArgs(arr5,1,2,3);
console.log(newa);

//Q5
let mergedobjects = (obj1,obj2) =>{
   
    let newobj = {...obj1,...obj2};
    return newobj;
}
let obj1 = {
    name:"Kartavya",
    age:23
}
let obj2 = {
    name:"Shaurya",
    age:18
}
let finalobj = mergedobjects(obj1,obj2);
console.log(finalobj);