const student = {
    name:"kartavya",
    age:23,
    eng:94,
    math:92,
    phy:91,
    getAvg(){
        console.log(this);
        let avg = (this.eng+this.math+this.phy)/3;
        console.log(`${name} got avg marks ${avg}`);
    }
}

student.getAvg();

function dummy(){
    console.log(this);
}
dummy();