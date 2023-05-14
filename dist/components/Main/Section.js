// Description: Contient le template de Section
// path to the file: src/templates/classes/Section.ts
//--
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
    element;
    class;
    id;
    data;
    constructor(SectionOptions) {
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
    template() {
        return `${(this.data).charAt(0).toUpperCase() + (this.data).slice(1)}
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
    render(element) {
        element.innerHTML += this.template();
    }
}
export default Section;
//# sourceMappingURL=Section.js.map