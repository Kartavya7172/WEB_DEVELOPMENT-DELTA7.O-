// function savetodb (data,success,failure){
//     let internetspeed = Math.floor(Math.random()*10)+1;
//     if(internetspeed>=4)
//     {
//        success();
//     }else{
//        failure();
//     }
// }

// savetodb ("apna college",()=>{
//     console.log("Success: your data is saved");
//     savetodb(
//         "hello world",
//         () => {
//             console.log("Success:Data2 is saved");
//             savetodb("kartavya",() => {
//                 console.log("Success: Data3 is saved");
//             },
//         () => {
//               console.log("Failure:Data 3 is not saved");
//         });
//         },
//         () => {
//             console.log("Failure2:Data is not saved");
//         }
//     );
// },
// ()=>{
//     console.log("Weak Connection Data is not saved");
// });

//optimizing the upper code with promises
function savetodb(data){
    return new Promise((resolve,reject) => {
        let internetspeed = Math.floor(Math.random()*10)+1;
        if(internetspeed>4)
        {
            resolve("Success:Data is Saved");
        }else{
            reject("Failure:Weak connection");
        }
    });
}

//using then and catch
savetodb("apna college")
  .then((result)=>{
    console.log("Data1:is saved");
    console.log("result is",result);
    return savetodb("Hello world");
  })
  .then((result)=>{
    console.log("Data2:is saved");
    console.log("result is",result);
    return savetodb("kartavya");
  })
  .then((result)=>{
    console.log("Data3: is saved");
    console.log("result is",result);
  })
  .catch((error)=>{
    console.log("Promise was rejected");
    console.log("error is",error);
  });