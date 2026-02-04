const student = {
    name: "kartavya",
    age:14,
    class:9,
    subjects:["maths","english","chemistry","physics"],
    username:"katu2151",
    password:"abcd"
};

let {username:user,password:secret,losser = "sam"} = student;
