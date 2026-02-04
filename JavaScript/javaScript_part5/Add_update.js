const student={
    name:"shradha",
    age:23,
    marks:94.4,
    city:"Delhi"
};

//To upadte
student.city="Mumbai";
student["city"] = "Pune";

//To add
student.gender = "female";
student["CGPA"] = 9.4;

//To delete
delete student.marks