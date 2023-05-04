
function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
}

function playMatch(matchChoice, computerChoice) {

    if (matchChoice == "rock" && computerChoice === 0) {

        console.log("You both picked Rock - it's a draw!"); 
        results.textContent = 'You both picked Rock - it\'s a draw!';
        showScore();

    }

    else if (matchChoice == "rock" && computerChoice === 1) {
        computerScore = computerScore + 1;
        declareWinner();
        console.log("You lose this round! Paper beats Rock");
        results.textContent = 'You lose this round! Paper beats Rock';
        showScore();



    }

    else if (matchChoice == "rock" && computerChoice === 2) {
        playerScore = playerScore + 1;
        declareWinner();
        console.log("You min this round! Rock beats scissors");
        results.textContent = 'You win this round! Rock beats scissors';
        showScore();


    }


    else if (matchChoice == "paper" && computerChoice === 0) {
        playerScore = playerScore + 1; 
        declareWinner();
        console.log("You min this round! Paper beats rock");
        results.textContent = 'You min this round! Paper beats rock';
        showScore();
 

    }

    else if (matchChoice == "paper" && computerChoice === 1) {

        console.log("You both picked paper - it's a draw!");
        results.textContent = 'You both picked paper - it\'s a draw!';
        showScore();

    }

    else if (matchChoice == "paper" && computerChoice === 2) {
        computerScore = computerScore + 1;
        declareWinner();
        console.log("You lose this round! scissors beats paper");
        results.textContent = 'You lose this round! scissors beats paper';
        showScore();


    }

    else if (matchChoice == "scissors" && computerChoice === 0) {
        computerScore = computerScore + 1; 
        declareWinner();
        console.log("You lose this round! Rock beats scissors");
        results.textContent = 'You lose this round! Rock beats scissors';
        showScore();


    }

    else if (matchChoice == "scissors" && computerChoice === 1) {
        playerScore = playerScore + 1; 
        declareWinner();
        console.log("You min this round! Scissors beats paper");
        results.textContent = 'You min this round! Scissors beats paper';
        showScore();


    }

    else if (matchChoice == "scissors" && computerChoice === 2) {

        console.log("You both picked scissors - it's a draw!");
        results.textContent = 'You both picked scissors - it\'s a draw!';
        showScore();

    }

    else {
        console.log("Something strange happened...");
        results.textContent = 'Hm... Something went wrong.';
        showScore();
    }
}

function declareWinner() {
    if (playerScore === 5 && computerScore < 5){
        console.log("Congratulations! You beat the computer!");
        winnerText.textContent = `Congratulations! You beat the computer! \r\n`;
        const playAgainButton = document.createElement('button');
        winner.appendChild(playAgainButton); 
        playAgainButton.innerText = `Play again?`;
        playAgainButton.addEventListener('click', function(e) {
        playAgain();
        showScore();
        winner.removeChild(playAgainButton);


        });

    }

    else if (computerScore === 5 && playerScore < 5) {
        console.log("You've been bested by the computer!" 
                + " Better luck next time...")
        winnerText.textContent = `You've been bested by the computer!` 
        + ` Better luck next time... \r\n`;
        const playAgainButton = document.createElement('button');
        winner.appendChild(playAgainButton); 
        playAgainButton.innerText = `Play again?`;
        playAgainButton.addEventListener('click', function(e) {
        playAgain();
        showScore();
        winner.removeChild(playAgainButton);

        });
    }   
}

function playAgain() {
    playerScore = 0;
    computerScore = 0;
    winnerText.textContent = `The winner is the first to reach five points.`;
}

function showScore() {
    score.textContent = 
    `Score | Player: ${playerScore} 
    Computer: ${computerScore}`;
}

let playerScore = 0;
let computerScore = 0;

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
const winnerText = document.querySelector('#winnerText');