let arr = [1,2,3,13,13,45,656];

function print(el){
    console.log(el);
}

//first way
arr.forEach(print);

//second way
arr.forEach(function (el){
   console.log(el);
})

//third way

arr.forEach((el) => {
   console.log(el);
})

//can also be use for the array of objects
const arr1 = [{
    name:"kartavya",
    age:23
},{
    name:"Shaurya",
    age:17
},{
    name:"Anil",
    age:24
}]

arr1.forEach((student) => {
    console.log(student.name);
})