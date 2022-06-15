
const choices = ["rock", "paper", "scissors"];

//everytime there is a winner this array will get filled w/ it.
let winners = [];

function game() { 
//5 rounds of the game, with for loop
for(let i=0; i<5; i++ ) { 
    playRound(i);
  }

  document.querySelector('button').textContent = "Play New Game"

  logTheWinner();
}
  


function playRound(round) { 
const playerSelection = playerChoice();
const computerSelection = computerChoice();
const winner = checkWinner(playerSelection, computerSelection);
winners.push(winner);
resultsOfEachRound(playerSelection, computerSelection, winner,round)
}


//player inputs choice
function playerChoice() 
{ 
    let input = prompt("SELECT FROM: Rock, Paper, & Scissors");
    while(input == null) { 
      input =   prompt("SELECT FROM: Rock, Paper, & Scissors");
    }
    input = input.toLowerCase();

  let check = inputValidation(input);
  while(check==false) { 
   input =  prompt("Capital letters do not matter but Spelling needs to be correct");

while(input == null) { 
   input =  prompt("SELECT FROM: Rock, Paper, & Scissors");
}
input = input.toLowerCase();
check = inputValidation(input);
}
return input;
}


function computerChoice() { 
//computer inputs random choice
return choices[Math.floor(Math.random()*choices.length)];
}

function inputValidation(choice) {
return choices.includes(choice);
}

function checkWinner(choiceOfPlayer, choiceOfComputer) { 
if(choiceOfPlayer===choiceOfComputer) { 
    return "Tie Game";
  } else if(
        (choiceOfPlayer === "rock" && choiceOfComputer === "scissors") ||
        (choiceOfPlayer === "paper" && choiceOfComputer === "rock") ||
        (choiceOfPlayer === "scissors" && choiceOfComputer === "paper")
        ){
              return "Player";
        } else { 
            return "Computer";
        }
}

function logTheWinner() { 
let playerVictories = winners.filter((item) => item == "Player").length;
let computerVictories = winners.filter((item) => item == "Computer").length;
let ties = winners.filter((item) => item == "Tie").length;
console.log("Results: ")
console.log("Player Victories: ", playerVictories );
console.log("Computer Victories: ", computerVictories);
console.log("Ties:", ties);
}

function resultsOfEachRound(playerChoice, computerChoice, winner,round) { 
  console.log("Round: ", round);
console.log("Player chose: ", playerChoice);
console.log("Computer Chose: ", computerChoice);
console.log("Winner Of The Round: ", winner);
console.log("---------------------")
}


