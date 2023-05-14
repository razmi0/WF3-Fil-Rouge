// Description: Contient le template de chaque type d'card
// path to the file: scripts/Classes/Meal.js
//--

import { CardType } from "../../interface/index-types.js";

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

class Card {
  private name: string;
  private price: number;
  private description: string;
  private imageSrc: string;
  private imageAlt: string;
  private id: string;

  constructor(public product: CardType) {
    this.name = product.name;
    this.price = product.price;
    product.description
      ? (this.description = product.description)
      : (this.description = "Aucune description");
    this.imageSrc = product.imageSrc;
    this.imageAlt = product.imageAlt;
    this.id = this.name.toLowerCase().replaceAll(" ", "");
  }

  /**
   * @visibility private
   * @method template
   * @returns {string} - Return the HTML template as a string
   */

  private template(): string {
    return `
    <div class="card_">
    <div class="card__header">
    <div class="card__img">
      <img src="${this.imageSrc}" alt="${this.imageAlt}" />
    </div>
    <div class="card__title">
      <h3 class="card__title_text">${this.name}</h3>
    </div>
    </div>
    <div class="card__body">
      <div class="card__body_text">${this.description}</div>
      <div class="card__body_price">${this.price}</div>
    </div>
  </div>
  
        `;
  }

  /**
   * Inject le template dans l'élément HTML
   * @method render
   * @visibility public
   * @param {HTMLElement} element - Element HTML dans lequel le template sera injecté
   */

  public render(element: HTMLElement): void {
    element.innerHTML += this.template();
  }
}

export default Card;
