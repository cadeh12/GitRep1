const plus1 = document.getElementById('plus1')
const plus2 = document.getElementById('plus2')
const plus3 = document.getElementById('plus3')
const plus4 = document.getElementById('plus4')
const minus1 = document.getElementById('minus1')
const minus2 = document.getElementById('minus2')
const minus3 = document.getElementById('minus3')
const minus4 = document.getElementById('minus4')
const A1 = document.getElementById('A1')
const A2 = document.getElementById('A2')
const A3 = document.getElementById('A3')
const A4 = document.getElementById('A4')

function toggleQnA1() {
    plus1.style.display = "none";
    minus1.style.display = "block";
    A1.style.display = "block";
}

plus1.addEventListener("click", toggleQnA1)