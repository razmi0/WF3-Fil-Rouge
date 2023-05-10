// Contain the Header class for the page
// path : src/components/classes/Header.ts
//--

import { StaticData, addAllNavEvents } from "../Modules.js";

class Header {
  private header: HTMLElement;
  private dropdown: HTMLElement;
  private flags: HTMLElement;
  private logo: HTMLElement;
  private choice1: string;
  private choice2: string;
  private choice3: string;
  private choice4: string;
  private choice5: string;
  protected imagePath: string;
  constructor() {
    this.header = document.querySelector("#header") as HTMLElement;
    this.flags = document.querySelector("#flags") as HTMLElement;
    this.dropdown = document.querySelector(
      ".dropdown__menu_burger"
    ) as HTMLElement;
    this.logo = document.querySelector("#logo") as HTMLElement;
    this.imagePath = StaticData.imagePath;
    this.choice1 = "choice 1";
    this.choice2 = "choice 2";
    this.choice3 = "choice 3";
    this.choice4 = "choice 4";
    this.choice5 = "choice 5";
  }

  private templateDrop(): string {
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

  private templateLogo(): string {
    return `
  <a href="">
    <div class="navbar__logo">
        <img class="navbar__logo_img" src="${this.imagePath}/logo/logo.jpg" alt="logo">
    </div>
  </a>
  
  `;
  }

  private templateFlags(): string {
    return `
    <img src="${this.imagePath}/frenchflagframed.svg" alt="Français">
      <span></span>
    <img src="${this.imagePath}/united-kingdom-flag-icon.svg" alt="English">
    `;
  }
  private renderDrop(): void {
    this.dropdown.innerHTML += this.templateDrop();
  }

  private renderFlag(): void {
    this.flags.innerHTML += this.templateFlags();
  }

  private renderLogo(): void {
    this.logo.innerHTML += this.templateLogo();
  }

  private renderHero(): void {
    this.header.innerHTML += this.templateHero();
  }
  
  private templateHero(): string {
    return `
    <div class="hero">
        <img id="hero" src="${this.imagePath}/hero_image.JPG" alt="Image" class="hero image" aria-label="hero image" />
    </div>
    <div class="menu-encart-cadre">
      <h1 class="menu-encart-texte">Carte & Menus</h1>
    </div>
    `;
  }

  private eventsNav(): void {
    addAllNavEvents();
  }

  public run(): void {
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
