const calculator = {
    num:55,

    add :function(a,b){
        return a+b;
    },
    sub :function(a,b){
        return a-b;
    },
    mul :function(a,b){
        return a*b;
    },
}

let sum = calculator.add(1,2);
console.log(sum);

//shorthand
const calculator1 = {
    add1(a,b){
        return a+b;
    },
    sub1(a,b){
        return a-b;
    }
}


let sum1 = calculator1.sub1(1,2);
console.log(sum1);
