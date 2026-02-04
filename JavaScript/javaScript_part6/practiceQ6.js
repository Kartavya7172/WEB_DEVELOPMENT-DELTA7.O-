function concat(arraystr){
   let str = "";
    for(let i=0;i<arraystr.length;i++)
   {
      str = str+arraystr[i];
   }
   return str;
} 
let s=["Kartavya","Sudarshan","Tonpe"];
let finalstr = concat(s);
console.log(finalstr);