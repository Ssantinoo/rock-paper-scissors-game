function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter Rock, Paper or Scissors: ").toLowerCase();

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

console.log(getComputerChoice());
console.log(getHumanChoice());