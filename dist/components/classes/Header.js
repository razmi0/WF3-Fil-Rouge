// Contain the Header class for the page
// path : src/components/classes/Header.ts
//--
import { StaticData, addAllNavEvents } from "../Modules.js";
class Header {
    header;
    dropdown;
    flags;
    logo;
    choice1;
    choice2;
    choice3;
    choice4;
    choice5;
    imagePath;
    constructor() {
        this.header = document.querySelector("#header");
        this.flags = document.querySelector("#flags");
        this.dropdown = document.querySelector(".dropdown__menu_burger");
        this.logo = document.querySelector("#logo");
        this.imagePath = StaticData.imagePath;
        this.choice1 = "choice 1";
        this.choice2 = "choice 2";
        this.choice3 = "choice 3";
        this.choice4 = "choice 4";
        this.choice5 = "choice 5";
    }
    templateDrop() {
        return `

    <div class="dropdown__menu_burger-choises" id="dropdown-choices">
        <a href="#" class="dropdown__burger-choice">
            <p>${this.choice1}</p>
        </a>
        <a href="#" class="dropdown__burger-choice">
            <p>${this.choice2}</p>
        </a>
        <a href="#" class="dropdown__burger-choice">
            <p>${this.choice3}</p>
        </a>
        <a href="#" class="dropdown__burger-choice">
            <p>${this.choice4}</p>
        </a>
        <a href="#" class="dropdown__burger-choice">
            <p>${this.choice5}</p>
        </a>
    </div>
    `;
    }
    templateLogo() {
        return `
  <a href="">
    <div class="navbar__logo">
        <img class="navbar__logo_img" src="${this.imagePath}/logo/logo.jpg" alt="logo">
    </div>
  </a>
  
  `;
    }
    templateFlags() {
        return `
    <img src="${this.imagePath}/frenchflagframed.svg" alt="Français">
      <span></span>
    <img src="${this.imagePath}/united-kingdom-flag-icon.svg" alt="English">
    `;
    }
    renderDrop() {
        this.dropdown.innerHTML += this.templateDrop();
    }
    renderFlag() {
        this.flags.innerHTML += this.templateFlags();
    }
    renderLogo() {
        this.logo.innerHTML += this.templateLogo();
    }
    renderHero() {
        this.header.innerHTML += this.templateHero();
    }
    templateHero() {
        return `
    <div class="hero">
        <img id="hero" src="${this.imagePath}/hero_image.JPG" alt="Image" class="hero image" aria-label="hero image" />
    </div>
    <div class="menu-encart-cadre">
      <h1 class="menu-encart-texte">Carte & Menus</h1>
    </div>
    `;
    }
    eventsNav() {
        addAllNavEvents();
    }
    run() {
        const t1 = performance.now();
        this.renderDrop();
        this.renderLogo();
        this.renderFlag();
        this.renderHero();
        this.eventsNav();
        const t2 = performance.now();
        console.log(`Header rendered in ${t2 - t1} ms`);
    }
}
export default Header;
//# sourceMappingURL=Header.js.map