// Description: Contient le template de Section
// path to the file: src/templates/classes/Section.ts
//--

import { SectionElement } from "../../interface/interface.js";

class Section {
  private element: string;
  private class: string;
  private id: string;

  constructor(SectionOptions: SectionElement) {
    this.element = SectionOptions.element;
    this.class = SectionOptions.class;
    this.id = SectionOptions.id;
  }

  private template(): string {
    return `
            <${this.element}
             class="${this.class}"
              id="${this.id}">
              </${this.element}>
            `;
  }

  public render(element: HTMLDivElement): void {
    element.innerHTML += this.template();
  }
}

export default Section;
