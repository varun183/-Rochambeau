
const resultdiv = document.querySelector('.resultDiv .result-p');
const scorediv = document.querySelector('.resultDiv .score-p');


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




   let PlayerWins = 0;
   let CompWins = 0;

    function playRound(computerSelection,playerSelection){
            

        if(playerSelection==="paper" && computerSelection==="rock"){
            resultdiv.textContent=  "You Win! Paper beats Rock";
            PlayerWins++;
        }
        else if(playerSelection==="rock" && computerSelection==="paper"){
            resultdiv.textContent="You Lose! Paper beats Rock";
            CompWins++;
        }
        else if(playerSelection==="rock" && computerSelection==="scissor"){
            resultdiv.textContent="You Win! Rock beats Scissor ";
            PlayerWins++;
        }
        else if(playerSelection==="scissor" && computerSelection==="rock"){
            resultdiv.textContent="You Lose! Rock beats Scissor ";
            CompWins++;
        }
        else if(playerSelection==="scissor" && computerSelection==="paper"){
            resultdiv.textContent="You Win! Scissor beats paper ";
            PlayerWins++;
        }
        else if(playerSelection==="paper" && computerSelection==="scissor"){
            resultdiv.textContent="You Lose! Scissor beats paper ";
            CompWins++;
        }
        else{
            resultdiv.textContent="It's a draw";
        }

        scorediv.innerText = `Your Wins: ${PlayerWins}

                                 Computer Wins: ${CompWins} `; 
    }

    function playerChoice(){ 
    
        const gameButtons = document.querySelectorAll('.gameBtn');
    
        Array.from(gameButtons).forEach(button => {

            
    
            
            button.addEventListener('click', function() {

                if (PlayerWins < 5 && CompWins < 5){
                        const playerSelection = this.id;
                        playRound(getComputerChoice(), playerSelection);

                        if (PlayerWins === 5 ) {
                            resultdiv.textContent = "Game Over. You have reached 5 points.";
                        }
                        if (CompWins === 5) {
                            resultdiv.textContent = "Game Over. Computer has reached 5 points.";
                        }
                    }



            });
            
        });
        
    }

    playerChoice();

        
            
            
        

    





 
