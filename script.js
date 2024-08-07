function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
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

function getUserChoice() {
    const userInput = prompt("Please pick rock, paper, or scissors");
    if (userInput === null) {
        console.log("The prompt is cancelled");
        return null;
    }
    const lowerCaseInput = userInput.toLowerCase();
    const validChoices = ["rock", "paper", "scissors"];
    if (validChoices.includes(userInput)) {
        alert(`You choose ${userInput}`);
        return userInput;
    } 
    else {
        alert("Invalid input! Please enter rock, paper, or scissors.");
        console.log("Invalid input! Please enter rock, paper, or scissors");
        return getUserChoice();
    }
}

getUserChoice();