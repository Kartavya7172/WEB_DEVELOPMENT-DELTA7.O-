let cars = ['audi','bmw','xuv','maruti'];
cars.splice(3);
console.log(cars);

cars.splice(0,1);
console.log(cars);

cars.push('maruti');
cars.push('ferari');

console.log(cars);  
cars.splice(1,2);
console.log(cars);

cars.splice(1,0,'toyota','audi','rangerover');
console.log(cars);