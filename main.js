document.addEventListener('DOMContentLoaded', () => {
  const choices = document.querySelectorAll('.choice-emoji div');
  const compEmoji = document.querySelector('.comp-emoji h1');
  const playerEmoji = document.querySelector('.play-emoji h1');
  const result = document.querySelector('.results h3');
  const scores = document.querySelector('.scores');
  let compScore = 0;
  let playerScore = 0;
  
  // Generate Computer's choice
  function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber].querySelector('p').textContent;
  }
  
  // Compare choices and update result
  function updateResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
  result.textContent = 'draw';
  } else if (
  (playerChoice === 'rock' && computerChoice === 'scissors') ||
  (playerChoice === 'paper' && computerChoice === 'rock') ||
  (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
  playerScore++;
  result.textContent = 'player wins';
  } else {
  compScore++;
  result.textContent = 'computer wins';
  }
  
  scores.textContent = `computer ${compScore} - ${playerScore} player`;
  }
  
  // Play the game
  choices.forEach(choice => {
  choice.addEventListener('click', () => {
  const playerChoice = choice.querySelector('p').textContent;
  const computerChoice = getComputerChoice();
  
  compEmoji.textContent = computerChoice === 'rock' ? '✊' : (computerChoice === 'paper') ? '✋' : '✌️';
  playerEmoji.textContent = playerChoice === 'rock' ? '✊' : (playerChoice === 'paper') ? '✋' : '✌️';
  
  updateResult(playerChoice, computerChoice);
  });
  });
  });