// Contain the Nav class for the page
// path : src/components/classes/Nav.ts
//--
import { Header, DropDown, addAllNavEvents } from "../../Modules.js";
class Nav extends Header {
    constructor() {
        super();
    }
    templateNav() {
        return `


    <div class="navbar__icones">

        <div class="navbar__icone_link">
            <div class="navbar__icones_languages">
                <img src="${this.imagePath}/frenchflagframed.svg" alt="Français">
                <span></span>
                <img src="${this.imagePath}/united-kingdom-flag-icon.svg" alt="English">
            </div>
            <div class="dropdown__language-option">
                <a href="#" class="dropdown__language-linkFR">Français</a>
                <span></span>
                <a href="#" class="dropdown__language-linkEN">English</a>
            </div>
        </div>

        <a href="#" class="navbar__icone_link">
            <div class="navbar__icones_reservation">
                <i class="fa-solid fa-calendar fa-2xl"></i>
            </div>
        </a>

        <a href="#" class="navbar__icone_link">
            <div class="navbar__icones_gift">
                <i class="fa-solid fa-gift fa-2xl"></i>
            </div>
        </a>

        <a href="#" class="navbar__icone_link">
            <div class="navbar__icones_cart">
                <i class="fa-solid fa-cart-shopping fa-2xl"></i>
            </div>
        </a>
        <a href="#" class="navbar__icone_link">
            <div class="navbar__icones_connexion">
                <i class="fa-regular fa-user fa-2xl"></i>
            </div>
        </a>

    </div>

    `;
    }
    renderNav() {
        this.navbar.innerHTML += this.templateNav();
    }
    eventsNav() {
        addAllNavEvents();
    }
    run() {
        const dropdown = new DropDown();
        dropdown.run();
        this.renderNav();
        this.eventsNav();
    }
}
export default Nav;
//# sourceMappingURL=Nav.js.map