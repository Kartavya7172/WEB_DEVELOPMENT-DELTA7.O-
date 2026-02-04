//Q1
let arr = [1,2,23,54,321,54,12,65];
let ret = [];
let num = 50;
for(let i=0;i<arr.length;i++)
{
   if(arr[i]>num)
   {
     ret.push(arr[i]);
   }
}
console.log(ret);

//Q2
let str = "abcdabcdefgggh";
let ans = str[0];
for(let i=1;i<str.length;i++)
{
    if((ans.includes(str[i])) == false)
    {
        ans=ans+str[i];
    }
}
console.log(ans);

//Q3
let country = ["Australia","germany","united states of india"];
function longestcountry(countries){
   let longeststr = "";
   for(let i=0;i<countries.length;i++)
   {
       if(longeststr.length<countries[i].length)
       {
         longeststr = countries[i];
       }
   }
   return longeststr;
}
let finalstr = longestcountry(country);
console.log(finalstr);

//Q4
let str1 = "kartavya";
let icnt =0;
for(let i=0;i<str1.length;i++)
{
    if(str1[i] == 'a'||str1[i] == 'i'||str1[i] == 'e'||str1[i] == 'o'||str1[i] == 'u')
    {
        icnt++;
    }
}
console.log(icnt);

//Q5

let num3 = function(start,end,diff){
  console.log(Math.floor(Math.random()*diff)+start);
} 
let start = 32;
let end = 36;
let diff = end-start+1;

