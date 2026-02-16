const choiceBtns = document.querySelectorAll(".choiceBtn");

const playerChoiceDisplay = document.querySelector(".playerChoice-display");
const computerChoiceDisplay = document.querySelector(".computerChoice-display");
const result = document.querySelector(".result");
const playerName = localStorage.getItem("playername");
const welcome = document.querySelector(".welcome");
const scoreDisplay = document.querySelector(".score-display")

welcome.textContent = playerName;

let playerChoice;
let computerChoice;

let score = 0;



choiceBtns.forEach(button => button.addEventListener("click", () => {
    playerChoice = button.textContent;
    playerChoiceDisplay.textContent = playerChoice;
    
    
    computerTurn();
    
    computerChoiceDisplay.textContent = computerChoice;
    result.textContent = `Result: ${checkWinner()}`;
}));

const computerTurn = () => {
  const randomNum = Math.floor(Math.random() * 3) + 1;

  switch (randomNum) {
    case 1:
      computerChoice = "✊";
      break;
    case 2:
      computerChoice = "✋";
      break;
    case 3:
      computerChoice = "✌️";
      break;
  }
};

const checkWinner = () => {
    if (playerChoice == computerChoice) return "It's a draw!";
    
    const playerWins = 
    (playerChoice === "✊" && computerChoice === "✌️") || 
    (playerChoice === "✋" && computerChoice === "✊") ||
    (playerChoice === "✌️" && computerChoice === "✋");

    if (playerWins) {
        addScore();
        return `${playerName} won!`;
    } else {
        resetScore();
        return "Computer won!"
    }
}

const addScore = () => {
    score += 1;
    scoreDisplay.textContent = score;
    console.log(score);

    if(score === 3){
        endGame();
    }
}

const resetScore = () => {
    score = 0;
    scoreDisplay.textContent = score;
    console.log(score);
} 

const endGame = () => {
    window.location.href = "credits.html";
}
