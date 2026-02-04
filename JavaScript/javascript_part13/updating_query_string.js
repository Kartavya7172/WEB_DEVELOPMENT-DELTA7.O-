//Search by country
// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click",async ()=>{
//     let country = document.querySelector("#inp").value;
//     let data = await searchuni(country);
//     show(data);
// })
// function show(collegearray){
//     let list = document.querySelector("ul");
//     list.innerText = "";
//     for(coll of collegearray)
//     {
//         let li = document.createElement("li");
//         li.innerText = coll.name;
//         list.appendChild(li);
//     }
// }

// async function searchuni(country){
//     try{
//       let res = await axios.get(url+country);
//       return res.data;
//     }catch(error){
//       console.log(error);
//       return [];
//     }

// }

//search by state
let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let state = document.querySelector("#inp").value;
    let data = await searchuni(state);
    show(data,state);
})
function show(collegearray,state){
    let list = document.querySelector("ul");
    list.innerText = "";
    for(coll of collegearray)
    {
        
        let li = document.createElement("li");
        if(coll["state-province"] == state){
            li.innerText = coll.name;
            list.appendChild(li);
        }
    }
}

async function searchuni(state){
    try{
      let res = await axios.get(url+state);
      return res.data;
    }catch(error){
      console.log(error);
      return [];
    }

}