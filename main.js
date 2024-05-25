function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
  return "It's a tie! You both chose " + playerSelection + ".";
  } else if (
  (playerSelection === "rock" && computerSelection === "scissors") ||
  (playerSelection === "scissors" && computerSelection === "paper") ||
  (playerSelection === "paper" && computerSelection === "rock")
  ) {
  return "You win! " + playerSelection + " beats " + computerSelection + ".";
  } else {
  return "Computer wins! " + computerSelection + " beats " + playerSelection + ".";
  }
  }
  
  function game() {
  // let playerSelection = prompt("Select: rock, paper, or scissors").toLowerCase();
  if (!["rock", "paper", "scissors"].includes(playerSelection)) {
  console.log("Invalid selection. Please choose rock, paper, or scissors.");
  return;
  }
  
  const computerSelection = computerPlay();
  console.log("Computer chose: " + computerSelection);
  
  console.log(playRound(playerSelection, computerSelection));
  }
  
  // Play a single round of the game
  game();