// Contain the Header class for the page
// path : src/components/classes/Header.ts
//--

import { HtmlFixed, Nav } from "../../Modules.js";

class Header extends HtmlFixed{
  protected header: HTMLElement;
  protected navbar: HTMLElement;
  protected imagePath: string;
  constructor() {
    super();
    this.header = document.querySelector("#header") as HTMLElement;
    this.navbar = document.querySelector("#navbar") as HTMLElement;
    this.imagePath = HtmlFixed.imagePath;

  }
  public run(): void {
    const nav = new Nav();
    nav.run();
  }
}

export default Header;
