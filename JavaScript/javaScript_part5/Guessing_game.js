let max = prompt("Enter the maximum number");
let num = Math.floor(Math.random()*max)+1;
console.log(num);
let usernum = prompt("Guess the number");
while((num != usernum) && (usernum != "quit"))
{
    if(usernum < num)
    {
        usernum = prompt("Wrong Guess! Guess larger number");
    }else{
        usernum = prompt("Wrong Guess! Guess smaller number");
    }
    
    if (usernum !== "quit") {
        usernum = Number(usernum);
    }
}
if(usernum == "quit")
{
    console.log("You Quit");
}else{
    console.log("🍾🎉Congrajulations! you guess the correct number");
}
