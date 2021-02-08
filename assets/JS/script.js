var menuheader = document.querySelector(".menu-header")
var burger = document.querySelector(".burger")

function toggleHamburger() {
    menuheader.classList.toggle("showNav")
    burger.classList.toggle("showClose")
}



burger.addEventListener('click', toggleHamburger)

var menuLinks = 
document.querySelectorAll(".menuLink")
menuLinks.forEach(
    function(menuLink) {
        menuLink.addEventListener("click", toggleHamburger)
    }
)