var startBtn = document.getElementById("button");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

let gameStarted = false;

const getWinner = function (cChoice = ROCK, uChoice) {
  console.log("USER PICKED", uChoice);
  console.log("COMPUTER PICKED", cChoice);

  if (cChoice === uChoice) {
    return "DRAW GAME";
  } else if (
    (cChoice === PAPER && uChoice === SCISSORS) ||
    (cChoice === SCISSORS && uChoice === ROCK) ||
    (cChoice === ROCK && uChoice === PAPER)
  ) {
    return "USER WINS";
  } else if (
    (uChoice === PAPER && cChoice === SCISSORS) ||
    (uChoice === SCISSORS && cChoice === ROCK) ||
    (uChoice === ROCK && cChoice === PAPER)
  ) {
    return "COMPUTER WINS";
  }
};

const computerChoice = function () {
  const val = Math.random();
  let selectedChoice;

  if (val < 0.3) {
    selectedChoice = ROCK;
  } else if (val < 0.7) {
    selectedChoice = PAPER;
  } else {
    selectedChoice = SCISSORS;
  }

  return selectedChoice;
};

const start = () => {
  // mark game as started

  if (gameStarted) {
    return;
  }

  gameStarted = true;
  let userChoice = prompt(`Please select ${ROCK}, ${PAPER} or ${SCISSORS}`, "");
  let selectedUserChoice;
  if (userChoice !== ROCK && userChoice !== PAPER && userChoice !== SCISSORS) {
    selectedUserChoice = "ROCK";
  } else {
    selectedUserChoice = userChoice;
  }

  let selectedComputerChoice = computerChoice();

  const winner = getWinner(
    (cChoice = selectedComputerChoice),
    (uChoice = selectedComputerChoice)
  );

  console.log(winner);
};

startBtn.addEventListener("click", start);

