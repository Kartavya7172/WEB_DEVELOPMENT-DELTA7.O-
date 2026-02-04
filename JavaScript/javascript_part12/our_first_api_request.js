let url = "https://catfact.ninja/fact"; 
fetch(url)
.then((response)=>{
   return response.json();
})
.then((data)=>{
  console.log("Data 1",data.fact);
  return fetch(url);
})
.then((response)=>{
    return response.json();
})
.then((data)=>{
  console.log("Data 2",data.fact);
})
.catch((error)=>{
    console.log(error);
});

console.log("I dont wait");