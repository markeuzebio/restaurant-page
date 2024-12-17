import loadAboutPage from "./about-load.js";
import loadHomePage from "./homepage-load.js"
import loadMenuPage from "./menu-load.js";

loadHomePage();

function changeTab(tab_name) {
    const div_content = document.querySelector("#content");

    while(div_content.firstChild)
        div_content.removeChild(div_content.firstChild);

    if(tab_name === "Home")
        loadHomePage();
    else if(tab_name === "Menu")
        loadMenuPage();
    else
        loadAboutPage();
}

document.querySelectorAll("nav > button").forEach((button) => button.addEventListener("click", () => changeTab(button.textContent)));