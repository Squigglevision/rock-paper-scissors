function playMatch(matchChoice, computerChoice) {
    if (matchChoice == "rock" && computerChoice === 0) {
        showScore();
        results.textContent = 'You both picked Rock - it\'s a draw!';
    }
    else if (matchChoice == "rock" && computerChoice === 1) {
        computerScore = computerScore + 1;
        declareWinner();
        showScore();
        results.textContent = 'You lose this round! Paper beats Rock';
    }
    else if (matchChoice == "rock" && computerChoice === 2) {
        playerScore = playerScore + 1;
        declareWinner();
        showScore();
        results.textContent = 'You win this round! Rock beats scissors';
    }
    else if (matchChoice == "paper" && computerChoice === 0) {
        playerScore = playerScore + 1; 
        declareWinner();
        showScore();
        results.textContent = 'You min this round! Paper beats rock';
    }
    else if (matchChoice == "paper" && computerChoice === 1) {
        showScore();
        results.textContent = 'You both picked paper - it\'s a draw!';
    }
    else if (matchChoice == "paper" && computerChoice === 2) {
        computerScore = computerScore + 1;
        declareWinner();
        showScore();
        results.textContent = 'You lose this round! scissors beats paper';
    }
    else if (matchChoice == "scissors" && computerChoice === 0) {
        computerScore = computerScore + 1; 
        declareWinner();
        showScore();
        results.textContent = 'You lose this round! Rock beats scissors';
    }
    else if (matchChoice == "scissors" && computerChoice === 1) {
        playerScore = playerScore + 1; 
        declareWinner();
        showScore();
        results.textContent = 'You min this round! Scissors beats paper';
    }
    else if (matchChoice == "scissors" && computerChoice === 2) {
        showScore();
        results.textContent = 'You both picked scissors - it\'s a draw!';
    }
    else {
        showScore();
        results.textContent = 'Hm... Something went wrong.';
    }
}

function declareWinner() {
    if (playerScore === 5 && computerScore < 5){
        areaListener.abort() // Removes event listeners
        winnerText.textContent = `Congratulations! You beat the computer! \r\n`;
        makePlayAgainButton();
    }
    else if (computerScore === 5 && playerScore < 5) {
        areaListener.abort() // Removes event listeners
        winnerText.textContent = `You've been bested by the computer!` 
        + ` Better luck next time... \r\n`;
        makePlayAgainButton();
    }   
}

function addEventListeners(){
    areaListener = new AbortController(); // See orginal declaration for info
    rock.addEventListener('click', function (e) {
        rock.classList.add('btnClicked'); 
        paper.classList.remove('btnClicked');
        scissors.classList.remove('btnClicked');
        let computerChoice = getComputerChoice(3);
        matchChoice = "rock";
        playMatch(matchChoice, computerChoice)
        },
        { signal: areaListener.signal }
    );
    paper.addEventListener('click', function(e) {
        paper.classList.add('btnClicked');
        rock.classList.remove('btnClicked'); 
        scissors.classList.remove('btnClicked');

        let computerChoice = getComputerChoice(3);
        matchChoice = "paper";
        playMatch(matchChoice, computerChoice)
        },
        { signal: areaListener.signal }
    );
    scissors.addEventListener('click', function(e) {
        scissors.classList.add('btnClicked'); 
        paper.classList.remove('btnClicked');
        rock.classList.remove('btnClicked'); 

        let computerChoice = getComputerChoice(3);
        matchChoice = "scissors";
        playMatch(matchChoice, computerChoice)
        },
        { signal: areaListener.signal }
    );
}

function makePlayAgainButton() {
    const playAgainButton = document.createElement('button');
    playAgainButton.classList.add('playAgain'); 
    winner.appendChild(playAgainButton); 
    playAgainButton.innerText = `Play again?`;
    playAgainButton.addEventListener('click', function(e) {
        playAgain();
        showScore();
        winner.removeChild(playAgainButton);
    });
}

function playAgain() {
    playerScore = 0;
    computerScore = 0;
    winnerText.textContent = `Play rock, paper, scissors!
    The winner is the first to reach five points.`;
    rock.classList.remove('btnClicked'); 
    paper.classList.remove('btnClicked');
    scissors.classList.remove('btnClicked');
    addEventListeners();
}

function showScore() {
    score.textContent = 
    `Score | Player: ${playerScore} 
    Computer: ${computerScore}`;
}

function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
}

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const results = document.querySelector('#results');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner');
const winnerText = document.querySelector('#winnerText');

let areaListener = new AbortController(); 
// AbortController() provides the ability to abort event listeners
// The addEventListener() function makes a new AbortController() every time
// it's called so that events are not always in "aborted" state
// signal: areaListener.signal looks for variable areaListener after event and
// allows areaListener.abort to be called on each event with areaListener.signal
// All this just to make the buttons not clickable until you click "Play again"
// if the game ends, haha

addEventListeners();