// Contain the Header class for the page
// path : src/components/classes/Header.ts
//--
import { HtmlFixed, Nav } from "../../Modules.js";
class Header extends HtmlFixed {
    header;
    navbar;
    imagePath;
    constructor() {
        super();
        this.header = document.querySelector("#header");
        this.navbar = document.querySelector("#navbar");
        this.imagePath = HtmlFixed.imagePath;
    }
    run() {
        const nav = new Nav();
        nav.run();
    }
}
export default Header;
//# sourceMappingURL=Header.js.map