//1st way
// const sum = (a,b) => a+b;
// const mul = (a,b) => a*b;
// const g = 9.8;
// const PI = 3.14;

// let obj = {
//     sum:sum,
//     mul:mul,
//     g:g,
//     PI,PI,
// };

// module.exports = obj;


//2nd way
//The upper commented part can also be written as
// module.exports = {
//     sum:sum,
//     mul:mul,
//     g:g,
//     PI,PI,
// };

//3rd way
//also written as
module.exports.sum = (a,b) => a+b;
module.exports.mul = (a,b) => a*b;
module.exports.g = 9.8;
module.exports.PI = 3.14;