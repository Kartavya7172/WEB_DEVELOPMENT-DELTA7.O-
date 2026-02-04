let jsonRes =
  `{"fact":"A cat's normal pulse is 140-240 beats per minute, with an average of 195.","length":73}`;

let validres = JSON.parse(jsonRes);

//this will print the json object
console.log(validres);

//to access the object 
console.log(validres.fact);

//to convert object to json data
let back = JSON.stringify(validres);  
console.log(back);