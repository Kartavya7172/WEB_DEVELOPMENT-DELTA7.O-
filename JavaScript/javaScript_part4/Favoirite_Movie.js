let fav = "KGF";
let guess = prompt("Enter movie name");
while((fav != guess) && (guess != 'quit'))
{
    console.log("wrong");
    guess = prompt("Wrong Guess ! Please ty again");
}
if(guess == fav)
{
     console.log("Congrajulations! you guess right");
}else{
    console.log("You Quit");
}
