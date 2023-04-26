// Description: Contient le template de chaque type d'card
// path to the file: scripts/Classes/Meal.js
//--

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

class Card {
  private name: string;
  private price: number;
  private description: string;
  private imageSrc?: string;
  private imageAlt?: string;

  constructor(public product: Product) {
    this.name = product.name;
    this.price = product.price;
    if (!product.description) {
      this.description = "Aucune description";
    } else {
      this.description = product.description;
    }
    this.imageSrc = product.imageSrc;
    this.imageAlt = product.imageAlt;
  }

  /**
   * @visibility private
   * @method template
   * @returns {string} - Retourne le template HTML de l'card
   */

  private template(): string {
    return `
        <div class="card">
            <div class="card-header">
                <h2>${this.name}</h2>
            </div>
            <div class="card-body">
                <div class="card-body__content">
                    <div class="card-body__content__image">
                        <img src="${this.imageSrc}" alt="${this.imageAlt}">
                    </div>
                    <div class="card-body__content__text">
                        <p>${this.description}</p>
                        <p>${this.price}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
  }

  /**
   * @method render
   * @visibility public
   * @param {HTMLElement} element - Element HTML dans lequel le template sera injecté
   * @returns {void}
   * @description Injecte le template dans l'élément HTML
   */

  public render(element: HTMLElement): void {
    element.innerHTML = this.template();
  }
}

export default Card;
