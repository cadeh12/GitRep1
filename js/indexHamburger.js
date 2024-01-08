const menu = document.querySelector('.head-right')
const menuItems = document.querySelectorAll('.link')
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.getElementById('closeIcon');
const menuIcon = document.getElementById('menuIcon');

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu)

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu)
    }
)