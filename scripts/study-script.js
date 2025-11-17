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