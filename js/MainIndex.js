$(document).ready(() => {
    const dropdownMenu = document.querySelector("#PageContentLinks");
    const burgerIcon = document.querySelector("#BurgerMenu");

    burgerIcon.addEventListener("click", () => {
        burgerIcon.classList.toggle("is-active");
        dropdownMenu.classList.toggle("is-active");
    });
});