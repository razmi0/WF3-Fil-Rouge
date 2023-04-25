// Description: Contient le template de chaque type d'aliment
// path to the file: scripts/Classes/Meal.js
//--

interface Aliment {
  name: string;
  price: number;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

class Aliment implements Aliment {
  constructor( name : string, price : number, description : string, image : {src : string, alt : string}) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageSrc = image.src;
    this.imageAlt = image.alt;
  }

  #template() {
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

  render(element : HTMLElement) {
    element.innerHTML = this.#template();
  }
}

export default Aliment;
