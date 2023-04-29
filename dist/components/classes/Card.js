// Description: Contient le template de chaque type d'card
// path to the file: scripts/Classes/Meal.js
//--
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
     * @returns {string} - Retourne le template HTML de l'card
     */
    template() {
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
    render(element) {
        element.innerHTML += this.template();
    }
}
export default Card;
//# sourceMappingURL=Card.js.map