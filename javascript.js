
function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
}
    
let playerScore = 0;
let computerScore = 0;



function playMatch(matchChoice, computerChoice) {

    if (matchChoice == "rock" && computerChoice === 0) {

        console.log("You both picked Rock - it's a draw!"); 
        results.textContent = 'Result: You both picked Rock - it\'s a draw!';
        score.textContent = 
            `Score | Player: ${playerScore} 
            Computer: ${computerScore}`;

    }

    else if (matchChoice == "rock" && computerChoice === 1) {
        computerScore = computerScore + 1;
        console.log("You lose this round! Paper beats Rock");
        results.textContent = 'Result: You lose this round! Paper beats Rock';
        score.textContent = 
            `Score | Player: ${playerScore} 
            Computer: ${computerScore}`;win
        declareWinner();


    }

    else if (matchChoice == "rock" && computerChoice === 2) {
        playerScore = playerScore + 1;
        console.log("You min this round! Rock beats scissors");
        results.textContent = 'Result: You win this round! Rock beats scissors';
        score.textContent = 
            `Score | Player: ${playerScore} 
            Computer: ${computerScore}`;
        declareWinner();

    }


    else if (matchChoice == "paper" && computerChoice === 0) {
        playerScore = playerScore + 1; 
        console.log("You min this round! Paper beats rock");
        results.textContent = 'Result: You min this round! Paper beats rock';
        score.textContent = 
            `Score | Player: ${playerScore} 
            Computer: ${computerScore}`;
        declareWinner();

    }

    else if (matchChoice == "paper" && computerChoice === 1) {

        console.log("You both picked paper - it's a draw!");
        results.textContent = 'Result: You both picked paper - it\'s a draw!';
        score.textContent = 
            `Score | Player: ${playerScore} 
            Computer: ${computerScore}`;

    }

    else if (matchChoice == "paper" && computerChoice === 2) {
        computerScore = computerScore + 1;
        console.log("You lose this round! scissors beats paper");
        results.textContent = 'Result: You lose this round! scissors beats paper';
        score.textContent = 
            `Score | Player: ${playerScore} 
            Computer: ${computerScore}`;
        declareWinner();

    }

    else if (matchChoice == "scissors" && computerChoice === 0) {
        computerScore = computerScore + 1; 
        console.log("You lose this round! Rock beats scissors");
        results.textContent = 'Result: You lose this round! Rock beats scissors';
        score.textContent = 
            `Score | Player: ${playerScore} 
            Computer: ${computerScore}`;
        declareWinner();

    }

    else if (matchChoice == "scissors" && computerChoice === 1) {
        playerScore = playerScore + 1; 
        console.log("You min this round! Scissors beats paper");
        results.textContent = 'Result: You min this round! Scissors beats paper';
        score.textContent = 
            `Score | Player: ${playerScore} 
            Computer: ${computerScore}`;
        declareWinner();

    }

    else if (matchChoice == "scissors" && computerChoice === 2) {

        console.log("You both picked scissors - it's a draw!");
        results.textContent = 'Result: You both picked scissors - it\'s a draw!';
        score.textContent = 
            `Score | Player: ${playerScore} 
            Computer: ${computerScore}`;

    }

    else {
        console.log("Something strange happened...");
        results.textContent = 'Result: Hm... Something went wrong.';
        score.textContent = 
            `Score | Player: ${playerScore} 
            Computer: ${computerScore}`;

    }

}

function declareWinner() {
    if (playerScore === 5 && computerScore < 5){

        console.log("Congratulations! You beat the computer!");
        winner.textContent = `Congratulations! You beat the computer!`;

    }

    else if (computerScore === 5 && playerScore <5) {
        console.log("You've been bested by the computer!" 
                + " Better luck next time...")

    winner.textContent = "You've been bested by the computer!" 
    + " Better luck next time...";

    }
}




const rock = document.querySelector('#rock');
rock.addEventListener('click', function(e) {
    let computerChoice = getComputerChoice(3);
    matchChoice = "rock";
    console.log("rock");
    playMatch(matchChoice, computerChoice)
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function(e) {
    let computerChoice = getComputerChoice(3);
    matchChoice = "paper";
    console.log("paper");
    playMatch(matchChoice, computerChoice)
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function(e) {
    let computerChoice = getComputerChoice(3);
    matchChoice = "scissors";
    console.log("scissors");
    playMatch(matchChoice, computerChoice)
});

const results = document.querySelector('#results');

const score = document.querySelector('#score');
const winner = document.querySelector('#winner');









// rock.addEventListener('click', () => {
//   playMatch("Rock",getComputerChoice(3));
// });






// function game() {
    
//     let matchPrompt = prompt("Do you pick Rock, Paper or Scissors? ");
//     let matchChoice = matchPrompt.toLowerCase();
//     let computerChoice = getComputerChoice(3);
    
//     console.log(playMatch(matchChoice, computerChoice));

//     matchPrompt = prompt("Do you pick Rock, Paper or Scissors? ");
//     matchChoice = matchPrompt.toLowerCase();
//     computerChoice = getComputerChoice(3);   

//     console.log(playMatch(matchChoice, computerChoice));

//     matchPrompt = prompt("Do you pick Rock, Paper or Scissors? ");
//     matchChoice = matchPrompt.toLowerCase();
//     computerChoice = getComputerChoice(3);
    
//     console.log(playMatch(matchChoice, computerChoice));

//     matchPrompt = prompt("Do you pick Rock, Paper or Scissors? ");
//     matchChoice = matchPrompt.toLowerCase();
//     computerChoice = getComputerChoice(3); 

//     console.log(playMatch(matchChoice, computerChoice));

//     matchPrompt = prompt("Do you pick Rock, Paper or Scissors? ");
//     matchChoice = matchPrompt.toLowerCase();
//     computerChoice = getComputerChoice(3);
   
//     console.log(playMatch(matchChoice, computerChoice));
    
//     if (playerScore > computerScore){

//         console.log("Congratulations! You beat the computer!");

//     }

//     else if (computerScore > playerScore) {
//         console.log("You've been bested by the computer!" 
//                 + " Better luck next time...")

//     }

//     else {

//         console.log("You drew with the computer! Will you win next time?")
//     }
// }

    
// console.log(game());

