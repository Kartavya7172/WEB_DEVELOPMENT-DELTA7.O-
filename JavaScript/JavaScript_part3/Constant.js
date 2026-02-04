const arr = [45,23,88,11,98];
arr[0] = 21;
console.log(arr);
arr.pop();
console.log(arr);

//canot possible to assign the new array to bacause its address is constant
arr = [1,2,4];
console.log(arr);