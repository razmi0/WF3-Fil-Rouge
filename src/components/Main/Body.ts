// Body Components Rendering
// Path : src/components/classes/Body.ts
// --

// IMPORTS

import {
  StaticData,
  Button,
  Section,
  Card,
  ButtonElements,
  SectionElements,
  stringFormat,
  initComponents,
  addAllButtonsEvents,
} from "../Modules.js";

class Body {
  private fetchedData: any[] = [];
  private ressources: string[] = [];
  private products: any[] = [];
  private sectionsElements: HTMLElement[] = [];


  private buttonRender(): void {
    const buttons: ButtonElements = [];
    const btnContainer = document.querySelector(
      "#btn-container"
    ) as HTMLDivElement;

    for (let i = 0; i < this.ressources.length; i++) {
      buttons.push({
        element: StaticData.buttonType,
        type: StaticData.buttonType,
        text: this.ressources[i],
        class: StaticData.buttonClass,
        id: `${StaticData.buttonId}${this.ressources[i]?.toLowerCase()}`,
      });
    }
    initComponents(buttons, btnContainer, Button);
  }

  private sectionRender(): void {
    const sections: SectionElements = [];
    const sectionsContainer = document.querySelector(
      "#section-container"
    ) as HTMLDivElement;
    for (let i = 0; i < this.ressources.length; i++) {
      sections.push({
        element: StaticData.sectionType,
        class: StaticData.sectionClass,
        id: `${StaticData.sectionId}${this.ressources[i]?.toLowerCase()}`,
        data: `${this.ressources[i]?.toLowerCase()}`,
      });
    }
    initComponents(sections, sectionsContainer, Section);
    const nodeList: NodeListOf<HTMLElement> =
      document.querySelectorAll("section");
    this.sectionsElements = Array.from(nodeList);
  }

  private cardRender(): void {
    for (let j = 0; j < this.products.length; j++) {
      for (let i = 0; i < this.products[j].length; i++) {
        const { name, price, description, imageSrc, imageAlt } =
          this.products[j][i];
        const card: Card = new Card({
          description: description,
          name: name,
          price: price,
          imageSrc: imageSrc,
          imageAlt: imageAlt,
        });
        if (this.sectionsElements && this.sectionsElements[j]) {
          card.render(this.sectionsElements[j]!);
        }
      }
    }
  }

  private addEvents(): void {
    addAllButtonsEvents();
  }

  private prepareData(data: any[]): void{
    this.fetchedData = data;
    this.ressources = this.fetchedData.map((product) =>
      stringFormat(product.ressource)
    );
    this.products = this.fetchedData.map((product) => {
      return product.data;
    });
  }

  public run(data: any[]): void {
    try {
      this.prepareData(data);
      this.buttonRender();
      this.sectionRender();
      this.cardRender();
      this.addEvents();
    } catch (e) {
      console.warn(e);
      throw new Error("Error while running Body.run()");
    }
  }
}

export default Body;
