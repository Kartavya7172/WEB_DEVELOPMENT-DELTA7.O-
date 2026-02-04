let arr = [1,2,3,4,5];
let double = arr.map((el) =>{
    return el*2;
})
console.log(double);

const arr1 = [{
    name:"kartavya",
    age:23,
    marks:92
},{
    name:"Shaurya",
    age:17,
    marks:96
},{
    name:"Anil",
    age:24,
    marks:98
}]

let cgpa = arr1.map((student) => {
    return student.marks/10;
})
console.log(cgpa);

//filter
let crr = [1,1,424,131,434,412,75,334,66,443,656,67];
let even = crr.filter((el)=>{
    return el%2 == 0;
})
console.log(even);