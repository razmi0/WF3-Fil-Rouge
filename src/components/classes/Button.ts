// Description: Contient le template de Button
// path to the file: src/templates/classes/Button.ts
//--

import { ButtonElement } from "../../interface/interface.js";

class Button {
  private element: string;
  private type: string;
  private text: string;
  private class: string;
  private id: string;

  constructor(buttonOptions: ButtonElement) {
    this.element = buttonOptions.element;
    this.type = buttonOptions.type;
    this.text = buttonOptions.text;
    this.class = buttonOptions.class;
    this.id = buttonOptions.id;
  }

  private template(): string {
    return `
            <${this.element}
             type="${this.type}" 
             class="${this.class}"
              id="${this.id}">
              ${this.text}
              </${this.element}>
            `;
  }

  public render(element: HTMLDivElement): void {
    element.innerHTML += this.template();
  }
}

export default Button;
