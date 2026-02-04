let h1 = document.querySelector("h1");

// function changecolor(color,delay,nextcolor){
//    setTimeout(() => {
//       h1.style.color = color;
//       if(nextcolor) nextcolor();
//    },delay);
// }

// changecolor("red",1000,()=>{
//     changecolor("orange",1000,()=>{
//         changecolor("green",1000,() => {
//             changecolor("yellow",1000,()=>{
//                 changecolor("pink",1000,()=>{
//                     changecolor("violet",1000,()=>{
//                       changecolor("aqua",1000,)
//                    });
//                 });
//             });
//         });
//     });
// });

//refactoring old code
function changecolor(color,delay){
    return new Promise((resolve,reject) => {
         setTimeout(()=>{
            h1.style.color = color;
            resolve("Color is changed");
         },delay)
    });
}

changecolor("yellow",1000)
  .then((result)=>{
    console.log("result is:",result);
    return changecolor("red",1000);
  })
  .then((result)=>{
    console.log("result is:",result);
    return changecolor("blue",1000);
  })
  .then((result)=>{
    console.log("result is:",result);
    return changecolor("orange",1000);
  })
  .then((result)=>{
    console.log("result is:",result);
    return changecolor("voilet",1000);
  })
  .then((result)=>{
    console.log("result is:",result);
  })
  .catch((error)=>{
     console.log("error is:",error);
  })