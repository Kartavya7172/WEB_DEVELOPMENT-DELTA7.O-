const square = n =>(
    n*n
);

let icnt=0;

let id = setInterval(()=>{
  console.log("Hello worlds")
},2000);

setTimeout(()=>{
    clearInterval(id)
},10000);