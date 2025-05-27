console.log("Rock Paper Scissors:\nWorld Championship Edition")
let computerChoice = getComputerChoice();
if (computerChoice !== undefined) {
  console.log(computerChoice);
}
let playerChoice = getPlayerChoice();

while (playerChoice === null || playerChoice === "") {
  console.warn("Player choice undefined");
  playerChoice = getPlayerChoice();
}

console.log(playerChoice);

function getRandomInteger(number) {
  return Math.floor(Math.random() * number);
}

function getPlayerChoice() {
  let playerChoice = prompt("Rock, paper, scissors! SHOOT!");

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
