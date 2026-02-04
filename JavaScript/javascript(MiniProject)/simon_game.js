let gameseq = [];
let userseq = [];
let btns = ["yellow","green","blue","red"];
let highestscore = 0;
let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let body = document.querySelector("body");
document.addEventListener("keypress",function(){
  if(started == false)
  {
    started=true;
    levelup();
  }

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
       btn.classList.remove("flash");
    },250);
}

function backgroundflash(){
  body.classList.add("background");
  setTimeout(function(){
    body.classList.remove("background")
  },200)
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //random to choose button
    let randIdx = Math.floor(Math.random()*4);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    btnFlash(randbtn);
}

function reset()
{
   gameseq = [];
   userseq = [];
   started = false;
   level = 0;

}

function checkans(idx){

    if(userseq[idx] == gameseq[idx])
    {
      if(userseq.length == gameseq.length)
      {
          setTimeout(levelup,1000);
      }
    }  else{
      let currentscore = level-1;
   if (currentscore >= highestscore) {
    highestscore = currentscore;
    }
    backgroundflash();
    h2.innerHTML = `Your Highest score is:${highestscore}<br> Game over! your score is ${currentscore} <br> press any key to start!`;
    reset();
  }
}

function btnpress(){
    let btn = this;
    btnFlash(btn);
    let usercolor = btn.getAttribute("id");

    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click",btnpress);
}