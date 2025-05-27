console.log("Rock Paper Scissors:\nWorld Championship Edition")
let computerChoice = getComputerChoice();
if (computerChoice !== undefined) {
  console.log(computerChoice);
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
