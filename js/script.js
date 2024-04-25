let rockFigur = document.getElementById("rock");
let paperFigur = document.getElementById("paper");
let scissorsFigur = document.getElementById("scissors");

let figurs = ["rock", "paper", "scissors"];
let player = 0;
let computer = 0;


 


function game(playerSelection) {

    let randomIndex = Math.floor(Math.random() * figurs.length);
    let computerSelection=figurs[randomIndex] 
    
    console.log(computerSelection)

    if (playerSelection === computerSelection) {
        alert("Tie");
    }

    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {

        player++;
        alert("You win");
    }
    else {
        computer++
        alert("Game over")
    }
}

rockFigur.addEventListener("click", function () {
    game("rock");
})


paperFigur.addEventListener("click", function () {
    game("paper")
})
scissorsFigur.addEventListener("click", function () {
    game("scissors")
})
