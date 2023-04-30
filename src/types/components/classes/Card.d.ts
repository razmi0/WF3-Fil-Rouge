import { Product } from "../../interface/index-types.js";
/**
 * @class Card
 * @classdesc - Create a card element
 * @property {string} name - Product name
 * @property {number} price - Product price
 * @property {string} description - Product description
 * @property {string} imageSrc - Product image source
 * @property {string} imageAlt - Product image alt
 * @param {Product} product - Product options
 */
declare class Card {
    product: Product;
    private name;
    private price;
    private description;
    private imageSrc;
    private imageAlt;
    constructor(product: Product);
    /**
     * @visibility private
     * @method template
     * @returns {string} - Return the HTML template as a string
     */
    private template;
    /**
     * @method render
     * @visibility public
     * @param {HTMLElement} element - Element HTML dans lequel le template sera injecté
     * @description Inject le template dans l'élément HTML
     */
    render(element: HTMLElement): void;
}
export default Card;
//# sourceMappingURL=Card.d.ts.map