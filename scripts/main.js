let computerScore = 0;
let playerScore = 0;

let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissor');

let playerScoreDiv = document.querySelector('#playerScore');
let computerScoreDiv = document.querySelector('#computerScore');
let resultDiv = document.querySelector('#result');

const updateScores = (playersChoice) => {
    let result = playRound(playersChoice, getComputersChoice());

    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
    resultDiv.textContent = result;

    if (playerScore > 4 || computerScore > 4){
        endGame();
    }
}


rockButton.addEventListener('click', () => updateScores('rock') );
paperButton.addEventListener('click', () => updateScores('paper'));
scissorsButton.addEventListener('click', () => updateScores('scissors'));


const getComputersChoice = () => {
    const choiceNumber = Math.floor(Math.random() * 3);
    switch (choiceNumber) {
        case 0: {
            return 'rock';
        }
        case 1: {
            return 'paper';
        }
        case 2: {
            return 'scissors';
        }
    }
}

/**A function to compare player and computer's choice and return results. */
const playRound = (playersChoice, computersChoice) => {

    if (playersChoice === computersChoice) {
        return `It's a tie. your choice: ${playersChoice} vs ${computersChoice}`;
    }

    if ((computersChoice === 'rock' && playersChoice === 'paper') ||
        (computersChoice === 'paper' && playersChoice === 'scissors') ||
        (computersChoice === 'scissors' && playersChoice === 'rock')) {

        playerScore++;
        return `You won. your choice: ${playersChoice} beats ${computersChoice}`;
    }

    if ((computersChoice === 'rock' && playersChoice === 'scissors') ||
        (computersChoice === 'paper' && playersChoice === 'rock') ||
        computersChoice === 'scissors' && playersChoice === 'paper') {

        computerScore++;
        return `You lose. ${computersChoice} beats your choice: ${playersChoice}`;
    }
}


const endGame = () => {
    let playAgainButton = document.createElement('button');
    
    playAgainButton.setAttribute('id', 'play-again');
    playAgainButton.textContent = 'Play Again';
    
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    playAgainButton.addEventListener('click', () => {
        computerScore = 0;
        playerScore = 0;

        playerScoreDiv.textContent = "";
        computerScoreDiv.textContent = "";
        resultDiv.textContent = "";

        document.querySelector('main').removeChild(playAgainButton);

        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;

    });

    document.querySelector('main').appendChild(playAgainButton);

}