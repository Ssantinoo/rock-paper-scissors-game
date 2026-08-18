function getComputerChoice() { 
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    
    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Enter Rock, Paper or Scissors: ").toLowerCase();

    if (humanChoice === "rock") {
        return "Rock";
    } else if (humanChoice === "paper") {
        return "Paper";
    } else if (humanChoice === "scissors") {
        return "Scissors";
    } else {
        return "That is not the expected answer. Try again!";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "Rock" && computerChoice === "Scissors") {
            humanScore++;
            console.log("You win! Rock beats Scissors");
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            humanScore++;
            console.log("You win! Paper beats Rock");
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            humanScore++;
            console.log("You win! Scissors beats Paper");
        } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
            computerScore++;
            console.log("You lose! Rock beats Scissors");
        } else if (computerChoice === "Paper" && humanChoice === "Rock") {
            computerScore++;
            console.log("You lose! Paper beats Rock");
        } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
            computerScore++;
            console.log("You lose! Scissors beats Paper");
        } else {
            console.log("It's a tie");
        }
    }

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();