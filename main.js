
//let playerSelection = prompt('Hi, put your choice').toLowerCase()

function getComputerChoice() {
    let gameChoices = ['rock', 'paper', 'scissors']
    let computerSelection = gameChoices[Math.floor(Math.random(1) * gameChoices.length)];
    return computerSelection
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock"){
        console.log(`You won! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection === computerSelection) {
        console.log("It is a draw!")
    } else console.log(`You lost! ${computerSelection} beats ${playerSelection}`)
}

const playerSelection = prompt('Enter your choice')
const computerSelection = getComputerChoice()

function game() {
    for (let i = 0; i < 5; i++){
        singleRound(playerSelection, computerSelection)
    }
}

game()
