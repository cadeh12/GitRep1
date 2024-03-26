const features = document.querySelector('.features')
const company = document.querySelector('.company')
const featuresList = document.querySelector('.features-list')
const companyList = document.querySelector('.company-list')
const featuresArrowUp = document.querySelector(".features-arrow-up")
const companyArrowUp = document.querySelector(".company-arrow-up")
const featuresArrowDown = document.querySelector(".features-arrow-down")
const companyArrowDown = document.querySelector(".company-arrow-down")

features.addEventListener("click", toggleFeatures)

company.addEventListener("click", toggleCompany)

function toggleFeatures() {
    if (featuresList.classList.contains("displayList")) {
        featuresList.classList.remove("displayList");
        featuresArrowDown.style.display = "inline-block";
        featuresArrowUp.style.display = "none";
    } else {
        featuresList.classList.add("displayList");
        featuresArrowDown.style.display = "none";
        featuresArrowUp.style.display = "inline-block";
    }
}

function toggleCompany() {
    if (companyList.classList.contains("displayList")) {
        companyList.classList.remove("displayList");
        companyArrowDown.style.display = "inline-block";
        companyArrowUp.style.display = "none";
    } else {
        companyList.classList.add("displayList");
        companyArrowDown.style.display = "none";
        companyArrowUp.style.display = "inline-block";
    }
}

const sidebar = document.querySelector('.links')
const openSidebar = document.querySelector('#hamburger')
const closeSidebar = document.querySelector('#close-icon')

openSidebar.addEventListener('click', toggleSidebarOpen)
closeSidebar.addEventListener('click', toggleSidebarClose)

function toggleSidebarOpen() {
    openSidebar.style.display = "none";
    sidebar.classList.add("displaySidebar");
    closeSidebar.style.display = "block";
}

function toggleSidebarClose() {
    openSidebar.style.display = "block";
    sidebar.classList.remove("displaySidebar");
    closeSidebar.style.display = "none";
}
const features = document.querySelector('.features')
const company = document.querySelector('.company')
const featuresList = document.querySelector('.features-list')
const companyList = document.querySelector('.company-list')
const featuresArrowUp = document.querySelector(".features-arrow-up")
const companyArrowUp = document.querySelector(".company-arrow-up")
const featuresArrowDown = document.querySelector(".features-arrow-down")
const companyArrowDown = document.querySelector(".company-arrow-down")

features.addEventListener("click", toggleFeatures)

company.addEventListener("click", toggleCompany)

function toggleFeatures() {
    if (featuresList.classList.contains("displayList")) {
        featuresList.classList.remove("displayList");
        featuresArrowDown.style.display = "inline-block";
        featuresArrowUp.style.display = "none";
    } else {
        featuresList.classList.add("displayList");
        featuresArrowDown.style.display = "none";
        featuresArrowUp.style.display = "inline-block";
    }
}

function toggleCompany() {
    if (companyList.classList.contains("displayList")) {
        companyList.classList.remove("displayList");
        companyArrowDown.style.display = "inline-block";
        companyArrowUp.style.display = "none";
    } else {
        companyList.classList.add("displayList");
        companyArrowDown.style.display = "none";
        companyArrowUp.style.display = "inline-block";
    }
}

const sidebar = document.querySelector('.links')
const openSidebar = document.querySelector('#hamburger')
const closeSidebar = document.querySelector('#close-icon')

openSidebar.addEventListener('click', toggleSidebarOpen)
closeSidebar.addEventListener('click', toggleSidebarClose)

function toggleSidebarOpen() {
    openSidebar.style.display = "none";
    sidebar.classList.add("displaySidebar");
    closeSidebar.style.display = "block";
}

function toggleSidebarClose() {
    openSidebar.style.display = "block";
    sidebar.classList.remove("displaySidebar");
    closeSidebar.style.display = "none";
}