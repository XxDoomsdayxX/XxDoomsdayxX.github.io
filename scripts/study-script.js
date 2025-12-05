function playGame(element) {
    let compScore = document.getElementsByClassName("comp-score")[0];
    let userScore = document.getElementsByClassName("user-score")[0];
    let compDisplay = document.getElementsByClassName("comp-result")[0];
    let userDisplay = document.getElementsByClassName("user-result")[0];
    let result = document.getElementById("message");

    let randInt = Math.floor(Math.random() * 3);
    let userChoice = element;
    let compChoice = "";

    if (element === 'reset') {
        localStorage.removeItem('score');
    }

    let savedScore = localStorage.getItem('score');
    let score = savedScore ? JSON.parse(savedScore) : { user: 0, computer: 0};

    if (randInt === 0) {
        compChoice = 'rock';
    }
    else if (randInt === 1) {
        compChoice = 'paper';
    }
    else {
        compChoice = 'scissor';
    }


    if (element === compChoice) {
        result.textContent = "It's A Tie !!";
    }
    else if (element === 'scissor' && compChoice === 'paper') {
        result.textContent = "You Win !!";
        score.user += 1;
    }
    else if (element === 'scissor' && compChoice === 'rock') {
        result.textContent = "You Lose !!";
        score.computer += 1;

    }
    else if (element === 'paper' && compChoice === 'rock') {
        result.textContent = "You Win !!";
        score.user += 1;
    }
    else if (element === 'paper' && compChoice === 'scissor') {
        result.textContent = "You Lose !!";
        score.computer += 1;
    }
    else if (element === 'rock' && compChoice === 'scissor') {
        result.textContent = "You Win !!";
        score.user += 1;
    }
    else if (element === 'rock' && compChoice === 'paper') {
        result.textContent = "You Lose !!";
        score.computer += 1;
    }

    userScore.textContent = score.user;
    compScore.textContent = score.computer;
    compDisplay.textContent = compChoice;
    userDisplay.textContent = element;

    localStorage.setItem('score', JSON.stringify(score));
}



// Tic Tac Toe Game Script
let status = document.getElementById("status");
let cells = document.getElementsByClassName("cell");
let restart = document.getElementById("restart");
let mode = document.getElementById("mode");

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

var options = ["", "", "", "", "", "", "", "", ""];
var currentPlayer = "X";
var winner = false;
var opponent = "Player";
var player = currentPlayer === "X" ? "Player" : "Computer";

status.textContent = `Player ${currentPlayer}'s turn`;

restart.addEventListener("click", restartGame);
mode.addEventListener("click", changeMode);

for (let cell of cells) {
    cell.addEventListener("click", cellClicked);
}

function cellClicked(e) {
    if (winner == false) {
        for (let i = 0; i < cells.length; i++) {
            if (e.target === cells[i] && options[i] === "") {
                e.target.textContent = currentPlayer;
                options[i] = currentPlayer;
                checkWin();

                if (!winner) {
                    switchPlayer();
                    if (mode.textContent === "Vs Player") {
                        computerMove();
                    }
                }
            }
        }
    }
}

function checkWin() {
    for (let condition of winConditions) {
        const [a, b, c] = condition;

        const cellA = options[a];
        const cellB = options[b];
        const cellC = options[c];

        if (cellA !== "" && cellA === cellB && cellB === cellC) {
            winner = true;
            if (opponent === "Player") {
                status.textContent = `Player ${cellA} Wins !!`;
            } else if (opponent === "Computer"){
                if (cellA === "X") {
                    status.textContent = `Player Wins !!`;
                } else {
                    status.textContent = `Computer Wins !!`;
                }
            }
            return;
        } else {
            continue;
        }
    }
}

function switchPlayer() {
    if (mode.textContent === "Vs Comp" && winner === false) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        status.textContent = `Player ${currentPlayer}'s turn`;
    } else if (mode.textContent === "Vs Player" && winner === false) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        player = currentPlayer === "X" ? "Player" : "Computer";
        status.textContent = `${player}'s turn`;
    }
}

function restartGame() {
    options = ["", "", "", "", "", "", "", "", ""];
    winner = false;
    currentPlayer = "X";
    for (let cell of cells) {
        cell.textContent = "";
    }
    status.textContent = `Player ${currentPlayer}'s turn`;
}

function changeMode() {
    console.log("Mode button clicked");
    if (mode.textContent === "Vs Comp") {
        mode.textContent = "Vs Player";
        opponent = "Computer";
    } else {
        mode.textContent = "Vs Comp";
        opponent = "Player";
    }
    restartGame();
    console.log("Current mode:", opponent);
}

function computerMove() {
    let timer = 3;
    status.textContent = `Computers Thinking ${timer}`;

    let timerId = setInterval(() => {
        timer--;
        status.textContent = `Computers Thinking ${timer}`;

        if (timer === 0) {
            clearInterval(timerId);
            status.textContent = `${player}'s turn`;

            let availableCells = [];
            for (let i = 0; i < options.length; i++) {
                if (options[i] === "") {
                    availableCells.push(i);
                }
            }

            if (availableCells.length > 0) {
                let choice = Math.floor(Math.random() * availableCells.length);
                let cellIndex = availableCells[choice];
                cells[cellIndex].textContent = currentPlayer;
                options[cellIndex] = currentPlayer;
                checkWin();
                if (!winner) {
                    switchPlayer();
                }
            }
        }
    }, 1000);
}