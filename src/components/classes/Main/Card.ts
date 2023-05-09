// Description: Contient le template de chaque type d'card
// path to the file: scripts/Classes/Meal.js
//--

import { CardType } from "../../../interface/index-types.js";

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
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" 
              type="button" data-bs-toggle="collapse" 
              data-bs-target="#${this.id}" 
              aria-expanded="false" 
              aria-controls="${this.id}">
        ${this.name}
      </button>
    </h2>
    <div id="${this.id}" class="accordion-collapse collapse" data-bs-parent="#accordion">
      <div class="accordion-body">
        <div class="row">
          <div class="col-12 col-md-6">
            <img src="${this.imageSrc}" alt="${this.imageAlt}" class="img-fluid">
            </div>
            <div class="col-12 col-md-6">
              <p class="card-text">${this.description}</p>
              <p class="card-text">${this.price} €</p>
              <button class="btn btn-primary">Ajouter au panier</button>

      </div>
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
