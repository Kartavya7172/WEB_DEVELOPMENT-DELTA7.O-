const classInfo={
    aman:{
        grade:"A+",
        city:"Delhi"
    },

    shraddha:{
        grade:"A",
        city:"Pune"
    },

    karan:{
        grade:"o",
        city:"Mumbai"
    }
};

console.log(classInfo);
console.log(classInfo.aman.city);

//updating
classInfo.karan.grade="A+";

//Deleting
 delete classInfo.shraddha.city;
 console.log(classInfo.shraddha.city);