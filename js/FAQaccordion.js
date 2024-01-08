const plusList = document.querySelectorAll('.plus')
const minusList = document.querySelectorAll('.minus')
const answerList = document.querySelectorAll('.answer')

plusList.forEach(plus => {
    plus.addEventListener('click', () => {
        let index = parseInt(plus.id)
        plusList[index].style.display = 'none'
        minusList[index].style.display = 'block'
        answerList[index].style.display = 'block'
    })
});
minusList.forEach(minus => {
    minus.addEventListener('click', () => {
        let index = parseInt(minus.id)
        plusList[index].style.display = 'block'
        minusList[index].style.display = 'none'
        answerList[index].style.display = 'none'
    })
});