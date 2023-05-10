// Contain all the events for the nav inside the header
// path : src/events/headerNav.ts
//--
export function addAllNavEvents() {
    const elements = getNavElements();
    toggleLanguageDropdown(elements);
    toggleBurgerMenu(elements);
    removeDropdown(elements);
}
function getNavElements() {
    return {
        menu: document.querySelector(".dropdown__language-option"),
        toggleButton: document.querySelector(".navbar__icones_languages"),
        languageButtonFR: document.querySelector(".dropdown__language-linkFR"),
        languageButtonEN: document.querySelector(".dropdown__language-linkEN"),
        menuBurger: document.querySelector(".dropdown__menu_burger-choises"),
        toggleButtonBurger: document.querySelector(".navbar__menu_burger"),
    };
}
function toggleLanguageDropdown(elements) {
    elements.toggleButton.addEventListener("click", () => {
        elements.menu.classList.toggle("show");
    });
    elements.languageButtonFR.addEventListener("click", () => {
        elements.menu.classList.remove("show");
    });
    elements.languageButtonEN.addEventListener("click", () => {
        elements.menu.classList.remove("show");
    });
}
function toggleBurgerMenu(elements) {
    elements.toggleButtonBurger.addEventListener("click", () => {
        elements.menuBurger.classList.toggle("active");
    });
}
function removeDropdown(elements) {
    document.addEventListener("click", function (event) {
        // @ts-ignore
        if (!elements.menu.contains(event.target) && !elements.toggleButton.contains(event.target)) {
            elements.menu.classList.remove("show");
        }
        if (
        // @ts-ignore
        !elements.menuBurger.contains(event.target) &&
            // @ts-ignore
            !elements.toggleButtonBurger.contains(event.target)) {
            elements.menuBurger.classList.remove("active");
        }
    });
}
//# sourceMappingURL=header.js.map