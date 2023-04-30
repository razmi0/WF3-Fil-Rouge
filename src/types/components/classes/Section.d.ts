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
declare class Section {
    private element;
    private class;
    private id;
    private data;
    constructor(SectionOptions: SectionElement);
    /**
     * @visibility private
     * @method template
     * @returns {string} - Return the HTML template as a string
     */
    private template;
    /**
     * @method render
     * @visibility public
     * @param {HTMLElement} element - Parent Node
     * @description Injecte le template dans l'élément HTML
     */
    render(element: HTMLDivElement): void;
}
export default Section;
//# sourceMappingURL=Section.d.ts.map