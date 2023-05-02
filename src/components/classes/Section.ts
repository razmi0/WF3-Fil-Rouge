// Description: Contient le template de Section
// path to the file: src/templates/classes/Section.ts
//--

import { SectionElement } from "../../interface/index-types.js";




/**
 * @class Section
 * @classdesc - Create a section element
 * @property {string} element - HTML element
 * @property {string} class - HTML class
 * @property {string} id - HTML id
 * @property {string} data - HTML data
 * @param {SectionElement} SectionOptions - Section options
 */
class Section {
  private element: string;
  private class: string;
  private id: string;
  private data: string;

  constructor(SectionOptions: SectionElement) {
    this.element = SectionOptions.element;
    this.class = SectionOptions.class;
    this.id = SectionOptions.id;
    this.data = SectionOptions.data;
  }
  /**
   * @visibility private
   * @method template
   * @returns {string} - Return the HTML template as a string
   */
  private template(): string {
    return `
            <${this.element}
             class="${this.class}"
              id="${this.id}"
              data-type="${this.data}">
              </${this.element}>
            `;
  }
  /**
   * @method render
   * @visibility public
   * @param {HTMLElement} element - Parent Node
   * @description Injecte le template dans l'élément HTML
   */
  public render(element: HTMLDivElement): void {
    element.innerHTML += this.template();
  }
}

export default Section;