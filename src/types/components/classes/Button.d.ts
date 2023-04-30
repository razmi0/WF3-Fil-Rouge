import { ButtonElement } from "../../interface/index-types.js";
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
declare class Button {
    private element;
    private type;
    private text;
    private class;
    private id;
    constructor(buttonOptions: ButtonElement);
    /**
     * @visibility private
     * @method template
     * @returns {string} - Return the HTML template as a string
     */
    private template;
    /**
     * @method render
     * @visibility public
     * @description Inject the template into the DOM
     * @param {HTMLElement} element - Parent Node
     */
    render(element: HTMLDivElement): void;
}
export default Button;
//# sourceMappingURL=Button.d.ts.map