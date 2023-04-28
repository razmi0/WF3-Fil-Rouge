import { Product } from "../../interface/interface.js";
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
     * @returns {string} - Retourne le template HTML de l'card
     */
    private template;
    /**
     * @method render
     * @visibility public
     * @param {HTMLElement} element - Element HTML dans lequel le template sera injecté
     * @returns {void}
     * @description Injecte le template dans l'élément HTML
     */
    render(element: HTMLElement): void;
}
export default Card;
//# sourceMappingURL=Card.d.ts.map