function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            console.log("The computer picked rock");
            return "rock";
        case 1:
            console.log("The computer picked paper")
            return "paper";
        case 2: 
        console.log("The computer picked scissors")
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Please pick rock, paper, or scissors").toLowerCase();
    if (humanChoice === null) {
        console.log("The prompt is cancelled");
        return null;
    }
    const validChoices = ["rock", "paper", "scissors"];
    if (validChoices.includes(humanChoice)) {
        alert(`You choose ${humanChoice}`);
        console.log(`You choose ${humanChoice}`);
        return humanChoice;
    } 
    else {
        alert("Invalid input! Please enter rock, paper, or scissors.");
        console.log("Invalid input! Please enter rock, paper, or scissors");
        return getHumanChoice();
    }
}

getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        alert(`You both choose ${humanChoice} so it's a tie!`);
        console.log(`You both choose ${humanChoice} so it's a tie!`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") 
    ) {
        alert(`You win! ${humanChoice} beats ${computerChoice}!`);
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else {
        alert(`You lose! ${computerChoice} beats ${humanChoice}!`);
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    } 
}