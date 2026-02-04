let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");
let body = document.querySelector("body");
let p = document.querySelector("p");
btn.addEventListener("click", async ()=>{
   let fact = await getfacts();
   p.innerText = fact;
});

async function getfacts(){
  try{
      let res = await axios.get(url);
      return res.data.fact;
  }catch(error){
    console.log(error);
  }

};


