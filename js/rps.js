// the DOM (Document Object Model)
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const result = document.querySelector('.result')
const userImg = document.querySelector('.user-img')
const compImg = document.querySelector('.comp-img')

const choices = ['rock', 'paper', 'scissors']
let comp

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

function compChoice() {
    const randNum = Math.floor(Math.random()*3)
    comp = choices[randNum]
    compImg.src = "../img/rps_img/" + comp +".png"
}

function winLose(userChoice) {
    console.log(comp, userChoice)
}