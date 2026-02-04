 //Question 1
 let number = 20;
 if(number%10 == 0)
 {
    console.log("Good");
 }else{
    console.log("Bad");
 }

 //Question 2
//  let username = prompt("Enter your username");
//  let age = prompt("Enter your age");
//  let msg = `${username} is ${age} years old.`
//  alert(msg);

 //Question 3
 let Quarter=4;

 switch(Quarter){
   case 1:
      console.log("Januray February March");
      break;
   
   case 2:
      console.log("April May June");
      break;
   
   case 3:
      console.log("July Agust September");
      break;
   
   case 4:
      console.log("October November December");
      break;
   default:
      console.log("Invalid choice");
 }

 //Question4
 let str = "Aaaaa";
 if((str[0] == 'a' || str[0] == 'A') && str.length > 5)
 {
   console.log("Good");
 }else{
   console.log("Bad");
 }

 //Question 5
 let num1 = 235;
 let num2 = 24;
 let num3 = 111;

 if(num1>num2 && num1>num3)
 {
   console.log(num1);
 }else if(num2>num1 && num2>num3)
 {
   console.log(num2);
 }
 else{
   console.log(num3);
 }

 //Question 6
 let number1 = 21;
 let number2 = 3215211111111111;
 
 if(number1%10 == number2%10)
 {
   console.log("Same");
 }else{
   console.log("Different");
 }