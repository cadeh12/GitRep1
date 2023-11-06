// the DOM (Document Object Model)
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const result = document.querySelector('.result')
const userImg = document.querySelector('.user-img')
const compImg = document.querySelector('.comp-img')
const userScore = document.querySelector('.userScore')
const compScore = document.querySelector('.compScore')
const resetBtn = document.getElementById('reset')
const overall = document.querySelector('.overall')

let userCount = 0
let compCount = 0

const choices = ['rock', 'paper', 'scissors']
let comp
let userChoice

// function rockBtnClick() {
    //to change the text of the result object
//     result.innerText = 'rock clicked'
// }
// function paperBtnClick() {
//     result.innerText = 'paper clicked'
// }
// function scissorsBtnClick() {
//     result.innerText = 'scissors clicked'
// }

rockBtn.addEventListener('click', () => {
    userImg.src = "../img/rps_img/" + rockBtn.id + ".png"
    // result.style.backgroundColor = "red"
    compChoice()
    winLose(rockBtn.id)
})
paperBtn.addEventListener('click', () => {
    userImg.src = "../img/rps_img/" + paperBtn.id + ".png"
    compChoice()
    winLose(paperBtn.id)
})
scissorsBtn.addEventListener('click', () => {
    userImg.src = "../img/rps_img/" + scissorsBtn.id +".png"
    compChoice()
    winLose(scissorsBtn.id)
})
resetBtn.addEventListener('click', () => {
    window.location.reload()
})

function compChoice() {
    const randNum = Math.floor(Math.random()*3)
    comp = choices[randNum]
    compImg.src = "../img/rps_img/" + comp +".png"
}

function winLose(userChoice) {
    if (userChoice == "rock" && comp == "paper") {
        result.innerText = "Computer Wins"
        compCount = compCount + 1
        compScore.innerText = compCount.toString()
    } else if (userChoice == "paper" && comp == "scissors") {
        result.innerText = "Computer Wins"
        compCount = compCount + 1
        compScore.innerText = compCount.toString()
    } else if (userChoice == "scissors" && comp == "rock") {
        result.innerText = "Computer Wins"
        compCount = compCount + 1
        compScore.innerText = compCount.toString()
    } else if (userChoice == "rock" && comp == "scissors") {
        result.innerText = "User Wins"
        userCount = userCount + 1
        userScore.innerText = userCount.toString()
    } else if (userChoice == "paper" && comp == "rock") {
        result.innerText = "User Wins"
        userCount = userCount + 1
        userScore.innerText = userCount.toString()
    } else if (userChoice == "scissors" && comp == "paper") {
        result.innerText = "User Wins"
        userCount = userCount + 1
        userScore.innerText = userCount.toString()
    } else {
        result.innerText = "Tie"
    }
}
function bestOf5 () {
    if (userScore == "5") {
        overall.innerText = "YOU WIN"
    } else if (compScore = "5") {
        overall.innerText = "YOU LOSE"
    }
}