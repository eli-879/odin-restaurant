import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";
import loadContact from "./pages/contact.js";



function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurant = document.createElement("h1");
    restaurant.classList.add("restaurant");
    restaurant.innerText = "Dragon Bowl";

    header.appendChild(restaurant);
    header.appendChild(createNavElements());
    header.appendChild(createHamburgerNavElements());
    
    return header;
}

function createNavElements() {
    const navContainer = document.createElement("nav");
    navContainer.classList.add("navigation");

    // hamburger nav
    const anchor = document.createElement("a");
    anchor.href = "#";
    anchor.classList.add("toggle-button");

    for (let i =0; i < 3; i++) {
        const span = document.createElement("span");
        span.classList.add("bar");
        anchor.appendChild(span);
    }

    navContainer.appendChild(anchor);

    // regular nav
    const home = document.createElement("button");
    home.classList.add("nav-button");
    home.innerText = "Home";
    home.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(home);
        setContent(loadHome());
    });

    const menu = document.createElement("button");
    menu.classList.add("nav-button");
    menu.innerText = "Menu";
    menu.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(menu);
        setContent(loadMenu());
    });

    const contact = document.createElement("button");
    contact.classList.add("nav-button");
    contact.classList.add("contact-button");
    contact.innerText = "Contact";
    contact.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(contact);
        setContent(loadContact());
    });

    navContainer.appendChild(home);
    navContainer.appendChild(menu);
    navContainer.appendChild(contact);

    return navContainer
}

function createHamburgerNavElements() {
    const nav = document.createElement("nav");
    nav.classList.add("mobile-nav");

    const homeButton = document.createElement("button");
    homeButton.classList.add("b");
    homeButton.innerText = "Home";
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setContent(loadHome());
    });
    nav.appendChild(homeButton);

    const menuButton = document.createElement("button");
    menuButton.classList.add("b");
    menuButton.innerText = "Menu";
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setContent(loadMenu());
    });
    nav.appendChild(menuButton);

    const contactButton = document.createElement("button");
    contactButton.classList.add("b");
    contactButton.innerText = "Contact";
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setContent(loadContact());
    });
    nav.appendChild(contactButton);

    return nav;
    
}

function setActive(button) {
    const buttons = document.querySelectorAll(".nav-button");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });
    button.classList.add("active");
}

function setContent(newContent) {
    const content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    content.appendChild(newContent);
}

function createResizeListener() {
    const mobileMenu = document.getElementsByClassName("mobile-nav")[0];
    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    toggleButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    })

    window.addEventListener("resize", () => {
        if (window.matchMedia("(min-width: 600px)").matches) {
            mobileMenu.classList.remove("active");
        }
    })
};

function initWebsite() {
    const body = document.body;
    body.prepend(createHeader());
    createResizeListener();

}

initWebsite();
setContent(loadHome());

