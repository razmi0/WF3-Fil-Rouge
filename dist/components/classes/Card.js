// Description: Contient le template de chaque type d'card
// path to the file: scripts/Classes/Meal.js
//--
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
    product;
    name;
    price;
    description;
    imageSrc;
    imageAlt;
    constructor(product) {
        this.product = product;
        this.name = product.name;
        this.price = product.price;
        product.description
            ? (this.description = product.description)
            : (this.description = "Aucune description");
        this.imageSrc = product.imageSrc;
        this.imageAlt = product.imageAlt;
    }
    /**
     * @visibility private
     * @method template
     * @returns {string} - Return the HTML template as a string
     */
    template() {
        return `
        <div class="card">
          <div class="card-body">
            <img class="card-img-top" src="${this.imageSrc}" alt="${this.imageAlt}">
            <div class="card-text">
              <h4>${this.name}</h4>
              <p>${this.description}</p>
              <p>${this.price}</p>
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
    render(element) {
        element.innerHTML += this.template();
    }
}
export default Card;
//# sourceMappingURL=Card.js.map