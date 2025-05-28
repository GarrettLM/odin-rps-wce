const ROUND_WINNER_PLAYER = 1;
const ROUND_WINNER_COMPUTER = 2;
const ROUND_DRAW = 0;

const NUMBER_OF_ROUNDS = 5;

let playerScore = 0;
let computerScore = 0;
let roundNum = 1;

setEventHandlersOnButtons();

function setEventHandlersOnButtons() {
  setEventHandlerOnButton("rock");
  setEventHandlerOnButton("paper");
  setEventHandlerOnButton("scissors");
}

function setEventHandlerOnButton(choice) {
  let btn = document.querySelector(`.${choice}-btn`);
  btn.addEventListener("click", () => {
    playGame(choice);
  });
}

function displayChoice(player, choice) {
  let choiceView = document.querySelector(`.${player}-choice-view`);
  choiceView.textContent = choice;
}

function displayRoundResult(roundResult) {
  let roundResultView = document.querySelector(".round-result-view");
  roundResultView.textContent = roundResult;
}

function playGame(playerChoice) {
  let cpuChoice = getComputerChoice();
  displayChoice("player", playerChoice);
  displayChoice("cpu", cpuChoice);

  switch (playRound(playerChoice, cpuChoice)) {
    case ROUND_WINNER_PLAYER:
      playerScore++;
      displayRoundResult("Player");
      break;
    case ROUND_WINNER_COMPUTER:
      computerScore++;
      displayRoundResult("CPU");
      break;
    case ROUND_DRAW:
      displayRoundResult("Draw...");
      break;
    default:
      break;
  }
}

function checkForWin(playerOneChoice, playerTwoChoice) {
  return (((playerOneChoice === "rock") && (playerTwoChoice === "scissors"))
    || ((playerOneChoice === "paper") && (playerTwoChoice === "rock"))
    || ((playerOneChoice === "scissors") && (playerTwoChoice === "paper")));
}

function playRound(playerChoice, computerChoice) {
  if (checkForWin(playerChoice, computerChoice)) {
    return ROUND_WINNER_PLAYER;
  } else if (checkForWin(computerChoice, playerChoice)) {
    return ROUND_WINNER_COMPUTER;
  } else {
    return ROUND_DRAW;
  }
}

function getRandomInteger(number) {
  return Math.floor(Math.random() * number);
}

function getComputerChoice() {
  let choiceInteger = getRandomInteger(3);
  switch (choiceInteger) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      console.error("Unrecognized case: " + choiceInteger);
  }
}
