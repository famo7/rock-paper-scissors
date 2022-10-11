const ROCK_PAPER_SCISSORS = [
  { name: 'rock', loseTo: 'paper', winsAgainst: 'scissors' },
  { name: 'paper', loseTo: 'scissors', winsAgainst: 'rock' },
  { name: 'scissors', loseTo: 'rock', winsAgainst: 'paper' },
];
let round = 0,
  player = 0,
  computer = 0;
const resultDiv = document.querySelector('.result');
const winnerDiv = document.querySelector('.winner');
const getComputerChoice = () => {
  return ROCK_PAPER_SCISSORS[
    Math.floor(Math.random() * ROCK_PAPER_SCISSORS.length)
  ].name;
};

const playRound = (playerSelection, computerSelection) => {
  const found = ROCK_PAPER_SCISSORS.find(
    (element) =>
      element.name.toLocaleLowerCase() === playerSelection.toLowerCase()
  );

  if (!found) {
    return `user input not correct!`;
  }
  if (found.loseTo === computerSelection) {
    round++;
    computer++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
  if (found.winsAgainst === computerSelection) {
    round++;
    player++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
  if (found.name === computerSelection) {
    round++;
    return `Tie!`;
  }
};

const btnClick = (event) => {
  game(event.target.textContent);
};

const game = (mySelection) => {
  if (round < 5) {
    const resultParagraph = document.createElement('p');
    const computerSelection = getComputerChoice();
    const result = playRound(mySelection, computerSelection);
    resultParagraph.textContent = result;
    resultDiv.append(resultParagraph);
  } else {
    if (player > computer) {
      winnerDiv.textContent = `player wins with score ${player} - ${computer}`;
    } else if (player < computer) {
      winnerDiv.textContent = `Computer wins with score ${computer} - ${player}`;
    } else {
      winnerDiv.textContent = `its a tie with score ${player} - ${computer}`;
    }
  }
};

document.querySelectorAll('.choices').forEach((element) => {
  element.addEventListener('click', btnClick);
});
