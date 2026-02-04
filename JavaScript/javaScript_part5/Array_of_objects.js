const classInfo = [
    {
        name:"shradha",
        grade:"A+",
        city:"Delhi"
    },
    {
        name:"aman",
        grade:'A',
        city:"Mumbai"
    },
    {
        name:"karan",
        grade:'O',
        city:"solapur"
    }

];

//To print whole array
console.log(classInfo);

//To print the specific array at index
console.log(classInfo[0]);
console.log(classInfo[1]);
console.log(classInfo[2]);

//To print the object value
console.log(classInfo[0].name);
classInfo[0].name = "kartavya";

//To add the value in object
classInfo[1].gender="male";

//To delete
delete classInfo[1].gender;