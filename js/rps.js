const PLAYER_WINS = 1;
const COMPUTER_WINS = 2;
const DRAW = 0;

console.log("Rock Paper Scissors:\nWorld Championship Edition")
playRound();

function checkForWin(playerOneChoice, playerTwoChoice) {
  return (((playerOneChoice === "rock") && (playerTwoChoice === "scissors"))
    || ((playerOneChoice === "paper") && (playerTwoChoice === "rock"))
    || ((playerOneChoice === "scissors") && (playerTwoChoice === "paper")));
}

function playRound() {
  let playerChoice = getPlayerChoice();

  while (playerChoice === null || playerChoice === "") {
    console.warn("Player choice undefined");
    playerChoice = getPlayerChoice();
  }

  let computerChoice = getComputerChoice();
  if (computerChoice === undefined) {
    console.error(computerChoice);
    return;
  }

  console.log("Player: " + playerChoice);
  console.log("Computer:" + computerChoice);

  if (checkForWin(playerChoice, computerChoice)) {
    console.log("Player wins!");
    return PLAYER_WINS;
  } else if (checkForWin(computerChoice, playerChoice)) {
    console.log("Player loses...");
    return COMPUTER_WINS;
  } else {
    console.log("Draw...");
    return DRAW;
  }
}

function getRandomInteger(number) {
  return Math.floor(Math.random() * number);
}

function validatePlayerChoice(playerChoice) {
  if (playerChoice === null) {
    return "";
  }

  playerChoice = playerChoice.toLowerCase();
  if ((playerChoice === "rock")
   || (playerChoice === "paper")
   || (playerChoice === "scissors")) {
    return playerChoice;
  }

  return "";
}

function getPlayerChoice() {
  let playerChoice;
  do {
    playerChoice = prompt("Rock, paper, scissors! SHOOT!");
    playerChoice = validatePlayerChoice(playerChoice);
  } while (playerChoice === "");

  return playerChoice;
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
