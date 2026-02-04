let url = "https://catfact.ninja/fact";


//adding the try catch block
async function getfacts(){     
    try{     
     let res = await fetch(url);
     let data = await res.json();
     console.log(data.fact);

     let res1 = await fetch(url);
     let data1 = await res1.json();
     console.log(data1.fact);

   }catch(error){
     console.log(error);
   }
   console.log("Hello world");
}

