
function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
}
    
let playerScore = 0;
let computerScore = 0;


function match(matchChoice, computerChoice) {

    if (matchChoice == "rock" && computerChoice === 0) {

        console.log("You both picked Rock - it's a draw!"); 

    }

    else if (matchChoice == "rock" && computerChoice === 1) {
        computerScore = computerScore + 1;
        console.log("You lose! Paper beats Rock");


    }

    else if (matchChoice == "rock" && computerChoice === 2) {
        playerScore = playerScore + 1;
        console.log("You win! Rock beats scissors");


    }


    else if (matchChoice == "paper" && computerChoice === 0) {
        playerScore = playerScore + 1; 
        console.log("You win! Paper beats rock");

    }

    else if (matchChoice == "paper" && computerChoice === 1) {

        console.log("You both picked paper - it's a draw!");

    }

    else if (matchChoice == "paper" && computerChoice === 2) {
        computerScore = computerScore + 1;
        console.log("You lose! scissors beats paper");


    }

    else if (matchChoice == "scissors" && computerChoice === 0) {
        computerScore = computerScore + 1; 
        console.log("You lose! Rock beats scissors");


    }

    else if (matchChoice == "scissors" && computerChoice === 1) {
        playerScore = playerScore + 1; 
        console.log("You win! Scissors beats paper");


    }

    else if (matchChoice == "scissors" && computerChoice === 2) {

        console.log("You both picked scissors - it's a draw!");

    }

    else {
        console.log("Something strange happened...");

    }

}


function game() {
    
    let matchPrompt = prompt("Do you pick Rock, Paper or Scissors? ");
    let matchChoice = matchPrompt.toLowerCase();
    let computerChoice = getComputerChoice(3);
    
    console.log(match(matchChoice, computerChoice));

    matchPrompt = prompt("Do you pick Rock, Paper or Scissors? ");
    matchChoice = matchPrompt.toLowerCase();
    computerChoice = getComputerChoice(3);   

    console.log(match(matchChoice, computerChoice));

    matchPrompt = prompt("Do you pick Rock, Paper or Scissors? ");
    matchChoice = matchPrompt.toLowerCase();
    computerChoice = getComputerChoice(3);
    
    console.log(match(matchChoice, computerChoice));

    matchPrompt = prompt("Do you pick Rock, Paper or Scissors? ");
    matchChoice = matchPrompt.toLowerCase();
    computerChoice = getComputerChoice(3); 

    console.log(match(matchChoice, computerChoice));

    matchPrompt = prompt("Do you pick Rock, Paper or Scissors? ");
    matchChoice = matchPrompt.toLowerCase();
    computerChoice = getComputerChoice(3);
   
    console.log(match(matchChoice, computerChoice));
    
    if (playerScore > computerScore){

        console.log("Congratulations! You beat the computer!");

    }

    else if (computerScore > playerScore) {
        console.log("You've been bested by the computer!" 
                + " Better luck next time...")

    }

    else {

        console.log("You drew with the computer! Will you win next time?")
    }
}

    
console.log(game());

