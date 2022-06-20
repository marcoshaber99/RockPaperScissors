const choices = ["rock", "paper", "scissors"];
let winners = [];

function resetGame() {
  winners = [];
  document.querySelector(".playerScore").textContent = "Score: 0";
  document.querySelector(".computerScore").textContent = "Score: 0";
  document.querySelector(".ties").textContent = "Ties: 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".playerChoice").textContent = "";
  document.querySelector(".computerChoice").textContent = "";
  document.querySelector(".reset").style.display = "none";
}

function startGame() {
  //games is played until someone wins 5 games
  let imgs = document.querySelectorAll("img");

  imgs.forEach((img) =>
    img.addEventListener("click", () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  );
}

function playRound(playerChoice) {
  let wins = checkWins();

  if (wins >= 5) {
    return;
  }
  const computerChoice = computerSelect();

  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  tallyWins();
  displayRound(playerChoice, computerChoice, winner);
  wins = checkWins();
  if (wins == 5) {
    displayEnd();
  }
}

function displayEnd() {
  let playerWins = winners.filter((item) => item == "Player").length;

  if (playerWins == 5) {
    document.querySelector(".winner").textContent = "You won!";
  } else {
    document.querySelector(".winner").textContent =
      "You have been defeated by the computer...";
  }
  document.querySelector(".reset").style.display = "flex";
}

function displayRound(playerChoice, computerChoice, winner) {
  document.querySelector(".playerChoice").textContent = `You chose: ${
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
  }`;
  document.querySelector(
    ".computerChoice"
  ).textContent = `The computer chose: ${
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
  }`;
  displayWinnerOfRound(winner);
}

function displayWinnerOfRound(winner) {
  if (winner == "Player") {
    document.querySelector(".winner").textContent = "You won the round!";
  } else if (winner == "Computer") {
    document.querySelector(".winner").textContent =
      "The computer won the round";
  } else {
    document.querySelector(".winner").textContent = "The round was a tie";
  }
}

function tallyWins() {
  const playerWins = winners.filter((item) => item == "Player").length;
  const computerWins = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;

  document.querySelector(".playerScore").textContent = `Score: ${playerWins}`;
  document.querySelector(
    ".computerScore"
  ).textContent = `Score: ${computerWins}`;
  document.querySelector(".ties").textContent = `Ties: ${ties}`;
}

function computerSelect() {
  //have ot update the DOM w/ the computer selection
  const choice = choices[Math.floor(Math.random() * choices.length)];

  document.querySelector(`.${choice}`).classList.add("active");

  setTimeout(() => {
    document.querySelector(`.${choice}`).classList.remove("active");
  }, 1000);

  return choice;
}

function checkWins() {
  const playerWinCount = winners.filter((item) => item == "Player").length;
  const computerWinCount = winners.filter((item) => item == "Computer").length;
  return Math.max(playerWinCount, computerWinCount);
}

function checkWinner(choiceP, choiceC) {
  if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
  ) {
    return "Player";
  } else if (choiceP === choiceC) {
    return "Tie";
  } else {
    return "Computer";
  }
}

function setWins() {
  const playerWins = winners.filter((item) => item == "Player").length;
  const computerWins = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
}

startGame();

//finish
