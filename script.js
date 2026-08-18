let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++;
        return "You win! Rock beats Scissors";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        return "You win! Paper beats Rock";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        return "You win! Scissors beats Paper";
    } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        computerScore++;
        return "You lose! Rock beats Scissors";
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        computerScore++;
        return "You lose! Paper beats Rock";
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        computerScore++;
        return "You lose! Scissors beats Paper";
    } else if (humanChoice === computerChoice) {
        return "It's a tie";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`Your selection: ${humanSelection}`);
console.log(`Computer selection: ${computerSelection}`);
console.log(playRound(humanSelection, computerSelection));
console.log(`Human score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);