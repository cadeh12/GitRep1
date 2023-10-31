const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const result = document.querySelector('.result')
const userImg = document.querySelector('.user-img')
const compImg = document.querySelector('.comp-img')

function rockBtnClick() {
    result.innerText = 'rock clicked'
}
function paperBtnClick() {
    result.innerText = 'paper clicked'
}
function scissorsBtnClick() {
    result.innerText = 'scissors clicked'
}

rockBtn.addEventListener('click', rockBtnClick)
paperBtn.addEventListener('click', paperBtnClick)
scissorsBtn.addEventListener('click', scissorsBtnClick)