/**A function to get the computers choice i.e rock (0), paper(1) or scissor(2). */
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

/**A function to get player's choice using prompt. */
const getPlayersChoice = () => {
    let playersChoice = prompt("Enter your choice. Rock, Paper or Scissors?").toLowerCase().trim();

    while ((playersChoice.length == 0) || (playersChoice !== 'rock' && playersChoice !== 'paper'
        && playersChoice !== 'scissors')) {
            
        alert("Kindly enter a valid choice");
        playersChoice = prompt("Enter your choice. Rock, Paper or Scissors?").toLowerCase().trim();
    }

    return playersChoice;
}

/**A function to compare player and computer's choice and return results. */
const playRound = (playersChoice, computersChoice) => {

    if (playersChoice === computersChoice) {
        return `It's a tie. your choice: ${playersChoice} vs ${computersChoice}`;
    }

    if ((computersChoice === 'rock' && playersChoice === 'paper') ||
        (computersChoice === 'paper' && playersChoice === 'scissors') ||
        (computersChoice === 'scissors' && playersChoice === 'rock')) {
        return `You won. your choice: ${playersChoice} beats ${computersChoice}`;
    }

    if ((computersChoice === 'rock' && playersChoice === 'scissors') ||
        (computersChoice === 'paper' && playersChoice === 'rock') ||
        computersChoice === 'scissors' && playersChoice === 'paper') {
        return `You lose. ${computersChoice} beats your choice: ${playersChoice}`;
    }
}

/**A function to play 5 rounds of the game.*/
const game = () => {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayersChoice(), getComputersChoice()));
    }
}

game();