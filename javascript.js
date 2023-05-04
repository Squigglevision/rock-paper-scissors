function playMatch(matchChoice, computerChoice) {
    computerChoice = getComputerChoice();
    if ((matchChoice == "rock" && computerChoice == 'scissors') ||
        (matchChoice == "scissors" && computerChoice == 'paper') ||
        (matchChoice == "paper" && computerChoice == 'rock')) {
        playerScore += 1;
        showScore();
        declareWinner();
        results.textContent = 'You win this round! ' + matchChoice + ' beats '
                                + computerChoice;
    }
    else if (matchChoice == computerChoice) {
        results.textContent = 'It\'s a tie. You both chose ' + matchChoice;
    }
    else {
        computerScore += 1;
        showScore();
        declareWinner();
        results.textContent = 'You lose! ' + computerChoice + ' beats '
                                + matchChoice;
    }
}

function addEventListeners(){
    areaListener = new AbortController(); // See orginal declaration for info
    rock.addEventListener('click', function (e) {
        rock.classList.add('btnClicked'); 
        paper.classList.remove('btnClicked');
        scissors.classList.remove('btnClicked');
        matchChoice = "rock";
        playMatch(matchChoice, computerChoice)
        },
        { signal: areaListener.signal }
    );
    paper.addEventListener('click', function(e) {
        paper.classList.add('btnClicked');
        rock.classList.remove('btnClicked'); 
        scissors.classList.remove('btnClicked');
        matchChoice = "paper";
        playMatch(matchChoice, computerChoice)
        },
        { signal: areaListener.signal }
    );
    scissors.addEventListener('click', function(e) {
        scissors.classList.add('btnClicked'); 
        paper.classList.remove('btnClicked');
        rock.classList.remove('btnClicked'); 
        matchChoice = "scissors";
        playMatch(matchChoice, computerChoice)
        },
        { signal: areaListener.signal }
    );
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

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 1000);
    if (choice % 3 === 0) {
        return 'rock';
    }
    if (choice % 3 === 1) {
        return 'paper';
    }
    return 'scissors';
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

let playerScore = 0;
let computerScore = 0;
let computerChoice = getComputerChoice();

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