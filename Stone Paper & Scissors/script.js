let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#computer-score");

const gencompChoice= ()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawgame=()=>{
    // console.log("game was draw");
     msg.innerHTML="Game was Draw  play again";
};
const showWinner=(userwin)=>{
    if(userwin){
        userScore++;
        userScorepara.innerHTML=userScore;
        msg.innerHTML="You win!";
    msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorepara.innerHTML=compScore;
         msg.innerHTML="You lose";
          msg.style.backgroundColor="red";
    }
};
const playgame= (userChoice)=>{
    // console.log("user choice = ",userChoice);
    //comp choice
    const compChoice=gencompChoice();
    // console.log("comp choice=",compChoice);
    if(userChoice===compChoice){
        //draw
        drawgame();
    }else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin=compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            userwin=compChoice==="scissors" ? false:true;
        }else{
          userwin=  compChoice==="rock"?false:true;
        }
        showWinner(userwin)
    }
};
choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked =",userChoice);
        playgame(userChoice);
    });
});