const menu = document.querySelector('.head-right')
const menuItems = document.querySelectorAll('.link')
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.getElementById('closeIcon');
const menuIcon = document.getElementById('menuIcon');
const theJoke = document.querySelector(".output")
const jokeBtn = document.querySelector(".button")

function toggleMenu() {
    if (menu.classList.contains("displayMenu")) {
        menu.classList.remove("displayMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("displayMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu)

// Joke Generator
const url = 'https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd245082211msh9526fbad8f13081p1c9307jsnebb6e983526f',
    'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
  }
};

async function getJoke() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const joke = result[0].joke;
    console.log(result[0].joke);
    theJoke.textContent = joke;
  } catch (error) {
    theJoke.textContent = "something went awry..."
  }
}

jokeBtn.addEventListener("click", getJoke)

// Weather Widget
const weatherCity = document.querySelector(".weather-city")
const weatherDate = document.querySelector(".weather-date")
const weatherTime = document.querySelector(".weather-time")
const conditionIcon = document.querySelector(".con-img")
const currentCondition = document.querySelector(".condition")

// Date and Time
const dateObject = new Date();
const month = dateObject.getMonth() + 1
const day = dateObject.getDate()
const year = dateObject.getFullYear()
weatherDate.textContent = month + "/" + day + "/" + year
const hours = dateObject.getHours()
let minutes = dateObject.getMinutes()
if (minutes < 10) {
  minutes = "0" + dateObject.getMinutes()
}
let meridian = "AM"
if (hours > 12) {
  hours = dateObject.getHours() - 12
}
if (hours >= 12) {
  meridian = "PM"
}
let time = `${hours}:${minutes} ${meridian}`
weatherTime.textContent = time


weatherCity.textContent = "PORTLAND, ME"
conditionIcon.src = "img/weather/sunny.png"
currentCondition.textContent = "Sunny"