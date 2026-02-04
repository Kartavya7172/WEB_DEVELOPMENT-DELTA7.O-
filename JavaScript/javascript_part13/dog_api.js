let url = "https://dog.ceo/api/breeds/image/random";

let body = document.querySelector("body");
let img = document.querySelector("img");
let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let value = await getdogimage();
    img.setAttribute("src",value);
})

async function getdogimage(){
   try{
       let res = await axios.get(url);
       return res.data.message;
   }catch(error){
     console.log("Error is:-",error);
   }
}