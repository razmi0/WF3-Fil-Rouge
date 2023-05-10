// Contain all the events for the nav inside the header
// path : src/events/headerNav.ts
//--


import { NavElement } from "../interface/index-types.js";

export function addAllNavEvents(): void {
  const elements = getNavElements();
  toggleLanguageDropdown(elements);
  toggleBurgerMenu(elements);
  removeDropdown(elements);
}

function getNavElements(): NavElement {
  return {
    menu: document.querySelector(".dropdown__language-option") as HTMLElement,
    toggleButton: document.querySelector(".navbar__icones_languages") as HTMLElement,
    languageButtonFR: document.querySelector(".dropdown__language-linkFR") as HTMLElement,
    languageButtonEN: document.querySelector(".dropdown__language-linkEN") as HTMLElement,
    menuBurger: document.querySelector(".dropdown__menu_burger-choises") as HTMLElement,
    toggleButtonBurger: document.querySelector(".navbar__menu_burger") as HTMLElement,
  };
}

function toggleLanguageDropdown(elements: NavElement): void {
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

function toggleBurgerMenu(elements: NavElement): void {
  elements.toggleButtonBurger.addEventListener("click", () => {
    elements.menuBurger.classList.toggle("active");
  });
}

function removeDropdown(elements: NavElement): void {
  document.addEventListener("click", function (event) {
    // @ts-ignore
    if (!elements.menu.contains(event.target) && !elements.toggleButton.contains(event.target)) {
      elements.menu.classList.remove("show");
    }
    if (
      // @ts-ignore
      !elements.menuBurger.contains(event.target) &&
      // @ts-ignore
      !elements.toggleButtonBurger.contains(event.target)
    ) {
      elements.menuBurger.classList.remove("active");
    }
  });
}



