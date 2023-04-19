function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
  }

let computerChoice = getComputerChoice(3);

if (computerChoice === 0) {
    console.log("Rock");
}
    else if (computerChoice === 1){
        console.log("Paper");
    }

    else if (computerChoice === 2){
        console.log("Scissors");
    }
    else {
        console.log("Something went wrong...");
    }

let playerPrompt = prompt("Do you pick Rock, Paper or Scissors? ");
let playerChoice = playerPrompt.toLowerCase();

if (playerChoice == "rock") {

        console.log("Rock");

    }

    else if (playerChoice == "paper") {

        console.log("Paper");

    }
   
    else if (playerChoice == "scissors") {

        console.log("Scissors");

    }
    
    else
        
    {
    console.log("That's not an option!");
    }

    function playOneRound(playerChoice, computerChoice) {

        if (playerChoice == "rock" && computerChoice === 0) {

            return "You both picked Rock - it's a draw!" 
    
        }

        else if (playerChoice == "rock" && computerChoice === 1) {

            return "You lose! Paper beats Rock"
    
        }

        else if (playerChoice == "rock" && computerChoice === 2) {

            return "You win! Rock beats scissors"
    
        }


        else if (playerChoice == "paper" && computerChoice === 0) {

            return "You win! Paper beats rock" 
    
        }

        else if (playerChoice == "paper" && computerChoice === 1) {

            return "You both picked paper - it's a draw!" 
    
        }

        else if (playerChoice == "paper" && computerChoice === 2) {

            return "You lose! scissors beat paper"
    
        }

        else {
            return "Something strange happened..."

        }

    }

console.log(playOneRound(playerChoice, computerChoice));