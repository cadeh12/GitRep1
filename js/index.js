const menu = document.querySelector('.head-right')
const menuItems = document.querySelectorAll('.link')
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.getElementById('closeIcon');
const menuIcon = document.getElementById('menuIcon');
const stockPrice = document.querySelector(".output");

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


const url = 'https://yahoo-finance127.p.rapidapi.com/price/eth-usd';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd245082211msh9526fbad8f13081p1c9307jsnebb6e983526f',
    'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com'
  }
};

async function getPrice() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.lastMarket);
  } catch (error) {
    console.error(error);
  }
}

getPrice()
