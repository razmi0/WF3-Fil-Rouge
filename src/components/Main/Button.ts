// Description: Contient le template de Button
// path to the file: src/templates/classes/Button.ts
//--

import { ButtonElement } from "../../interface/index-types.js";
import { Main } from "../Modules.js";

/**
 * @class Button
 * @description A class to generate complete Buttons elements
 * @param {ButtonElement} buttonOptions - Options du button
 * @property {string} element - Element HTML du button
 * @property {string} type - Type du button
 * @property {string} text - Texte du button
 * @property {string} class - Classe du button
 * @property {string} id - Id du button
 */

class Button extends Main {
  private element: string;
  private type: string;
  private text: string;
  private class: string;
  private id: string;

  constructor(buttonOptions: ButtonElement) {
    super();
    this.element = buttonOptions.element;
    this.type = buttonOptions.type;
    this.text = buttonOptions.text ?? "---";
    this.class = buttonOptions.class;
    this.id = buttonOptions.id;
  }

  /**
   * @visibility private
   * @method template
   * @returns {string} - Return the HTML template as a string
   */
  private template(): string {
    return `
            <${this.element}
             type="${this.type}" 
             class="${this.class}"
              id="${this.id}"
              data-button>
              ${this.text}
              </${this.element}>
            `;
  }
  /**
   * @method render
   * @visibility public
   * @description Inject the template into the DOM
   * @param {HTMLElement} element - Parent Node
   */
  public render(element: HTMLDivElement): void {
    element.innerHTML += this.template();
  }
}

export default Button;
