$(document).ready(() => {

    //Used for Menu
    const dropdownMenu = document.querySelector("#PageContentLinks");
    const burgerIcon = document.querySelector("#BurgerMenu");

    burgerIcon.addEventListener("click", () => {
        burgerIcon.classList.toggle("is-active");
        dropdownMenu.classList.toggle("is-active");
    });

    //Used to toggle between panel tabs
    const panelTabs = document.querySelectorAll(".panel-tabs a");
    const panelTabContents = document.querySelectorAll(".TableTabContents > div");

    panelTabs.forEach((tab) => {
        tab.addEventListener("click", () => {

            const tabGroup = tab.classList.contains("Signaling");

            panelTabs.forEach((item) => {
                if (tabGroup == item.classList.contains("Signaling")) {
                    item.classList.remove("is-active");
                }
            });

            tab.classList.add("is-active");

            const tabTarget = tab.dataset.target;

            panelTabContents.forEach((tabContent) => {

                const tabContentGroup = tabContent.classList.contains("Signaling");

                if (tabGroup == tabContentGroup) {
                    if (tabContent.getAttribute("id") == tabTarget) {
                        tabContent.classList.remove("is-hidden");
                    } else {
                        tabContent.classList.add("is-hidden");
                    }
                }
            });
        });
    });

    //Used to toggle between main tabs
    const tabs = document.querySelectorAll(".tabs li");
    const tabContents = document.querySelectorAll("#MainPageBody > section");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((item) => {
                item.classList.remove("is-active");
            });
            tab.classList.add("is-active");

            const tabTarget = tab.dataset.target;
            tabContents.forEach((tabContent) => {
                if (tabContent.getAttribute("id") == tabTarget) {
                    tabContent.classList.remove("is-hidden");
                } else {
                    tabContent.classList.add("is-hidden");
                }
            });
        });
    });
});