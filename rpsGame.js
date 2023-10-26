
function getComputerChoice(){

    let num = Math.random()*10;
    if (num>=0 && num <=3){   

        return "rock";
    }
    else if(num>3 && num <=6){
        return "paper";
    }
    else{       
        return "scissor";
    }

};


function playerChoice(){  
    let choice = prompt("enter rock,paper or scissor");
    choice = choice.toLowerCase();
    return choice;
}










let PlayerWins=0;
let CompWins = 0;

function game(){
    for(let i =1;i<=5;i++){

    let computerSelection = getComputerChoice();  
    let playerSelection = playerChoice(); 

    function playRound(computerSelection,playerSelection){
    

        if(playerSelection==="paper" && computerSelection==="rock"){
            console.log("You Win! Paper beats Rock");
            PlayerWins++;
        }
        else if(playerSelection==="rock" && computerSelection==="paper"){
            console.log("You Lose! Paper beats Rock");
            CompWins++;
        }
        else if(playerSelection==="rock" && computerSelection==="scissor"){
            console.log("You Win! Rock beats Scissor ");
            PlayerWins++;
        }
        else if(playerSelection==="scissor" && computerSelection==="rock"){
            console.log("You Lose! Rock beats Scissor ");
            CompWins++;
        }
        else if(playerSelection==="scissor" && computerSelection==="paper"){
            console.log("You Win! Scissor beats paper ");
            PlayerWins++;
        }
        else if(playerSelection==="paper" && computerSelection==="scissor"){
            console.log("You Lose! Scissor beats paper ");
            CompWins++;
        }
        else{
            console.log("It's a draw")
        }
    }

    playRound(computerSelection, playerSelection);

        
            alert(`Your Wins: ${PlayerWins}:
            Comp Wins: ${CompWins}`)
        

    
}
if(PlayerWins>CompWins){
    alert("YOU WIN!!!")
}else{
    alert("YOU LOSE!!!")
}
}

game();



