let urMove=document.querySelector(".bt-sel")
let coMove=document.querySelector(".bt-com")
let finalResult=document.getElementById('result-span');
let matches=document.getElementById('totalMatch-span');
let pScore=document.getElementById('playerScore-span');
let cScore=document.getElementById('computerScore-span');
let tScore=document.getElementById('tie-span');

// computer and player variable will receive rock, paper and scissor text
let computer;
let player;

let totalMatches=0,playerScore=0,computerScore=0,tieScore=0;


function funRock(){
    urMove.style.backgroundImage='url(./images/Rock-emoji.png)'
    player='rock'
    funComMove();
}
function funPaper(){
    urMove.style.backgroundImage='url(./images/Paper-emoji.png)'
    player='paper'
    funComMove();

}
function funScissors(){
    urMove.style.backgroundImage='url(./images/Scissors-emoji.png)'
    player='scissors'
    funComMove();

}
function funComMove(){
    totalMatches+=1;
    matches.innerText=totalMatches;

    const comMove=Math.random();
    console.log(comMove);
    if(comMove<=0.33){
        coMove.style.backgroundImage='url(./images/Rock-emoji.png)';
        computer='rock';
        console.log('Rock');
    }else if(comMove>=0.34 && comMove<=0.66){
        coMove.style.backgroundImage='url(./images/Paper-emoji.png)'
        computer='paper';
        console.log('Paper');
    }else{
        coMove.style.backgroundImage='url(./images/Scissors-emoji.png)'
        computer='scissors'
        console.log('Scissors');
    }
    funResult();
}

function funResult(){
    if(computer==='rock' && player==='rock'){
        result='Tie';
        tieScore+=1;
        urMove.style.backgroundColor='blue';
        coMove.style.backgroundColor='blue';
    }else if(computer==='rock' && player==='paper'){
        result='Player won the Game';
        playerScore+=1;
        urMove.style.backgroundColor='green';
        coMove.style.backgroundColor='red';
    }else if(computer==='rock' && player==='scissors'){
        result="Player lose the game";
        computerScore+=1;
        urMove.style.backgroundColor='red';
        coMove.style.backgroundColor='green';
    }else if(computer==='paper' && player==='rock'){
        result="Player lose the game";
        computerScore+=1;
        urMove.style.backgroundColor='red';
        coMove.style.backgroundColor='green';
    }else if(computer==='paper' && player==='paper'){
        result='Tie'
        tieScore+=1;
        urMove.style.backgroundColor='blue';
        coMove.style.backgroundColor='blue';
    }else if(computer==='paper' && player==='scissors'){
        result='Player won the Game'
        playerScore+=1;
        urMove.style.backgroundColor='green';
        coMove.style.backgroundColor='red';
    }else if(computer==='scissors' && player==='rock'){
        result='Player won the Game'
        playerScore+=1;
        urMove.style.backgroundColor='green';
        coMove.style.backgroundColor='red';
    }else if(computer==='scissors' && player==='paper'){
        result="Player lose the game"
        computerScore+=1;
        urMove.style.backgroundColor='red';
        coMove.style.backgroundColor='green';
    }else if(computer==='scissors' && player==='scissors'){
        result='Tie';
        tieScore+=1;
        urMove.style.backgroundColor='blue';
        coMove.style.backgroundColor='blue';
    }
    finalResult.innerText=result;
    pScore.innerText=playerScore;
    cScore.innerText=computerScore;
    tScore.innerText=tieScore;


}



