import "./styles.css";
import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";

const content = document.querySelector('#content');
const navButtons = document.querySelectorAll("nav button");

const pages = {
    "home-btn": home,
    "menu-btn": menu,
    "about-btn": about,
};

function renderPage(button) {
    content.innerHTML = "";
    pages[button.id](content);
    navButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
}

navButtons.forEach((button) => {
    button.addEventListener("click", () => renderPage(button));
});

renderPage(document.querySelector("#home-btn"));