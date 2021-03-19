$(document).ready(() => {
    //Used for Menu
    const dropdownMenu = document.querySelector("#PageContentLinks");
    const burgerIcon = document.querySelector("#BurgerMenu");

    burgerIcon.addEventListener("click", () => {
        burgerIcon.classList.toggle("is-active");
        dropdownMenu.classList.toggle("is-active");
    });

    $("#HomeButton").click(() => {
        window.self.close();
    });
})