const menuBurger = document.querySelector("#menuBurger");
const iconBar = document.querySelector(".fa-bars");
const navMobile = document.querySelector("#navMobile");

// event burger

menuBurger.addEventListener("click", function () {
    iconBar.classList.toggle("fa-x");
    navMobile.classList.toggle("hidden")
})