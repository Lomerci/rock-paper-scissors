let humanScore = 0;
let computerScore = 0;

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    document.querySelectorAll(".button-container .playBtn").forEach(button => {
        console.log(`Adding event listener to ${button.id}`);
        button.addEventListener("click", function() {
            console.log(`${this.id} button clicked`);
            const humanChoice = this.id;
            const computerChoice = getComputerChoice();
            highlightChoice(this, computerChoice);
            const result = playRound(humanChoice, computerChoice);
            updateScores(result);
            displayResult(humanChoice, computerChoice, result);
            checkGameOver();
        });
    });
});

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {
        return "You win!";
    }
    return "You lose!";
}

function displayResult(humanChoice, computerChoice, result) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${result}`;
}

function updateScores(result) {
    if (result.includes("win")) humanScore++;
    if (result.includes("lose")) computerScore++;
    console.log(`Player Score: ${humanScore} - Computer Score: ${computerScore}`);
}

function checkGameOver() {
    if (humanScore + computerScore >= 5) {
        let finalMessage;
        if (humanScore > computerScore) {
            finalMessage = `Congrats, you won the game! Final score: Player: ${humanScore} - Computer: ${computerScore}`;
        } else if (humanScore < computerScore) {
            finalMessage = `Sorry, you lost the game! Final score: Player: ${humanScore} - Computer: ${computerScore}`;
        } else {
            finalMessage = `It's a tie! Final score: Player: ${humanScore} - Computer: ${computerScore}`;
        }
        alert(finalMessage);
        console.log(finalMessage);

        const playAgain = prompt("Do you want to play another round? Type yes to play again or no to quit the game.");
        if (playAgain && playAgain.toLowerCase() === "yes") {
            humanScore = 0;
            computerScore = 0;
            document.getElementById("result").innerHTML = "";
            document.querySelectorAll(".computer-container .botBtn").forEach(button => {
                button.style.opacity = 1;  // Reset computer buttons
            });
        } else {
            alert("Thank you for playing!");
            console.log("Thank you for playing!");
        }
    }
}

function highlightChoice(humanButton, computerChoice) {
    // Highlight human choice
    document.querySelectorAll(".button-container .playBtn").forEach(button => {
        button.classList.remove("highlight");
    });
    humanButton.classList.add("highlight");

    // Highlight computer choice
    document.querySelectorAll(".computer-container .botBtn").forEach(button => {
        button.style.opacity = 0.3;  // Dim all computer choices
    });
    document.getElementById(`${computerChoice}-bot`).style.opacity = 1;  // Highlight chosen computer choice
}