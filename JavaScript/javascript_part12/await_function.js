// function givenum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           let num = Math.floor(Math.random()*10)+1;
//           console.log(num);
//           resolve("done");
//         },1000);
//     })
// }

// async function demo(){
//     await givenum();
//     await givenum();
//     await givenum();
//     await givenum();
//     await givenum();
//     await givenum();
//     await givenum();
//     givenum()
//       .then((result) => {
//        console.log(result);
//     });
// }

// demo();

//Example1
//color change code
let h1 = document.querySelector("h1");
function changecolor(color,delay){
    return new Promise((resolve,reject )=>{
       setTimeout(()=>{
         let num= Math.floor(Math.random()*10)+1;
         if(num<5)
         {
            reject("weak connection");
         }
          h1.style.color = color;
          console.log("Color is chnaged to:",color);
          resolve("Stong connection");
       },delay)
    });
}

async function demo(){

    //use try and catch if nay error occurs the other work can be done
  try{
      await changecolor("yellow",1000);
      await changecolor("green",1000);
      await changecolor("red",1000);
      await changecolor("blue",1000);
      await changecolor("voilet",1000);
      await changecolor("pink",1000);
      await changecolor("orange",1000);
            changecolor("black",1000);
  }  catch{
      let a = 23;
      console.log("The value of a is:",a);
  }

}
