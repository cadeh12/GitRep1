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

https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={9f9b4e7d7ecee25c8e5c3529ea6d8b76}




hamburger.addEventListener("click", toggleMenu)

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