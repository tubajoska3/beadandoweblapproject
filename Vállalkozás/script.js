var menu = document.getElementById("menu");
var navlink = document.getElementsByClassName("nav-link");
var navbar = document.getElementsByClassName("navbar-collapse");

// Első futtatás
toggleMenu();

// Vizsgálat, ha az ablak mérete megváltozik
window.addEventListener("resize", toggleMenu);

function toggleMenu() {
    if (window.innerWidth < 992) {
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    } if (window.innerWidth > 993) {
        menu.style.display = "flex";
}}