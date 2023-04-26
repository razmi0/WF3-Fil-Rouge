import { Product } from "../interface/interface";
/**
 * @class Card
 * @description Une instance = 1 card
 * @param {string} name - Nom de la'card
 * @param {number} price - Prix de la'card
 * @param {string} description - Description de la'card
 * @param {string} imageSrc - Chemin vers l'image de la'card
 * @param {string} imageAlt - Texte alternatif de l'image de la'card
 */
declare class Card {
    product: Product;
    private name;
    private price;
    private description;
    private imageSrc?;
    private imageAlt?;
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
//# sourceMappingURL=Meal.d.ts.map