// Contain the Dropdown class for the page
// path : src/components/classes/Header/Dropdown.ts
//--
import Nav from "./Nav.js";
class Dropdown extends Nav {
    choice1;
    choice2;
    choice3;
    choice4;
    choice5;
    constructor() {
        super();
        this.choice1 = "choice 1";
        this.choice2 = "choice 2";
        this.choice3 = "choice 3";
        this.choice4 = "choice 4";
        this.choice5 = "choice 5";
    }
    templateDrop() {
        return `
        <div class="dropdown__menu_burger">
        <div class="navbar__menu_burger">
            <span class="navbar__menu_burger_topBar"></span>
            <span class="navbar__menu_burger_middleBar"></span>
            <span class="navbar__menu_burger_bottomBar"></span>
        </div>
        <div class="dropdown__menu_burger-choises">
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
    </div>
    <a href="">
        <div class="navbar__logo">
            <img class="navbar__logo_img" src="${this.imagePath}/logo/logo.jpg" alt="logo">
        </div>
    </a>
        `;
    }
    renderDrop() {
        this.navbar.innerHTML = this.templateDrop();
    }
    run() {
        this.renderDrop();
    }
}
export default Dropdown;
//# sourceMappingURL=Dropdown.js.map