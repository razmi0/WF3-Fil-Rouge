// Body Components Rendering
// Path : src/components/classes/Body.ts
// --
import { Button, Section, Ressources, Card } from "../module.js";
import {
  ButtonElements,
  SectionElements
} from "../../interface/index-types.js";
import { stringFormat } from "../../utils/data-validation.js";
import addAllButtonsEvents from "../../events/button-events.js";

class Body {
  private fetchedData: any[] = [];
  private ressources: string[] = [];
  private products: any[] = [];
  private sectionsElements : NodeListOf<HTMLElement> = [];
  constructor() {}

  /**
   * Declare and render the component with all given options
   * @param {any[]} options
   * @param {HTMLElement} parent
   * @param {any} classe
   */
  private renderComponents(options: any[],parent: HTMLElement,classe: any): void {
    options.forEach((option) => {
      const component = new classe(option);
      component.render(parent);
    });
  }

  private buttonRender(): void {
    const buttons: ButtonElements = [];
    const btnContainer = document.querySelector(
      "#btn-container"
    ) as HTMLDivElement;

    for (let i = 0; i < this.ressources.length; i++) {
      buttons.push({
        element: "button",
        type: "button",
        text: this.ressources[i],
        class: "btn bg-3",
        id: `btn-${this.ressources[i]?.toLowerCase()}`,
      });
    }
    this.renderComponents(buttons, btnContainer, Button);
  }

  private sectionRender(): void {
    const sections: SectionElements = [];
    const sectionsContainer = document.querySelector(
      "#section-container"
    ) as HTMLDivElement;
    for (let i = 0; i < this.ressources.length; i++) {
      sections.push({
        element: "section",
        class: "d-flex d-none",
        id: `sec-${this.ressources[i]?.toLowerCase()}`,
        data: `${this.ressources[i]?.toLowerCase()}`,
      });
    }
    this.renderComponents(sections, sectionsContainer, Section);
    this.sectionsElements = document.querySelectorAll('section');
  }

  private cardRender(): void {
    console.log(this.products[0]);
    console.log(this.products[0].length);
    for(let j = 0; j < this.products.length; j++) {
      for (let i = 0; i < this.products[j].length; i++) {
        const { name, price, description, imageSrc, imageAlt } = this.products[j][i];
        const card : Card = new Card({
          description: description,
          name: name,
          price: price,
          imageSrc: imageSrc,
          imageAlt: imageAlt,
        });
        card.render(this.sectionsElements[j]);
      }
    }
  }

  private async getData(): Promise<void> {
    const dataSet = new Ressources();
    this.fetchedData = await dataSet.getProducts();
    this.ressources = this.fetchedData.map((product) => {
      return stringFormat(product.ressource);
    });
    this.products = this.fetchedData.map((product) => {
      return product.data;
    });
  }

  public async run(): Promise<void> {
    console.log("Body is running");
    await this.getData();
    this.buttonRender();
    this.sectionRender();
    this.cardRender();
    console.log("Listeners");
    addAllButtonsEvents();
    console.log("Body is finished");
  }
}

export default Body;
