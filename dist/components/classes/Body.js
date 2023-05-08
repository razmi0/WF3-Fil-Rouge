// Body Components Rendering
// Path : src/components/classes/Body.ts
// --
// IMPORTS
import { HtmlFixed, Button, Section, Ressources, Card, stringFormat, addAllButtonsEvents, } from "../ComponentsModule.js";
class Body extends HtmlFixed {
    fetchedData = [];
    ressources = [];
    products = [];
    sectionsElements = [];
    constructor() {
        super();
    }
    /**
     * Declare and render the component with all given options
     * @param {any[]} options
     * @param {HTMLElement} parent
     * @param {any} classe
     */
    renderComponents(options, parent, classe) {
        options.forEach((option) => {
            const component = new classe(option);
            component.render(parent);
        });
    }
    buttonRender() {
        const buttons = [];
        const btnContainer = document.querySelector("#btn-container");
        for (let i = 0; i < this.ressources.length; i++) {
            buttons.push({
                element: HtmlFixed.buttonType,
                type: HtmlFixed.buttonType,
                text: this.ressources[i],
                class: HtmlFixed.buttonClass,
                id: `${HtmlFixed.buttonId}${this.ressources[i]?.toLowerCase()}`,
            });
        }
        this.renderComponents(buttons, btnContainer, Button);
    }
    sectionRender() {
        const sections = [];
        const sectionsContainer = document.querySelector("#section-container");
        for (let i = 0; i < this.ressources.length; i++) {
            sections.push({
                element: HtmlFixed.sectionType,
                class: HtmlFixed.sectionClass,
                id: `${HtmlFixed.sectionId}${this.ressources[i]?.toLowerCase()}`,
                data: `${this.ressources[i]?.toLowerCase()}`,
            });
        }
        this.renderComponents(sections, sectionsContainer, Section);
        const nodeList = document.querySelectorAll("section");
        this.sectionsElements = Array.from(nodeList);
    }
    cardRender() {
        console.log(this.products);
        for (let j = 0; j < this.products.length; j++) {
            for (let i = 0; i < this.products[j].length; i++) {
                const { name, price, description, imageSrc, imageAlt } = this.products[j][i];
                const card = new Card({
                    description: description,
                    name: name,
                    price: price,
                    imageSrc: imageSrc,
                    imageAlt: imageAlt,
                });
                if (this.sectionsElements && this.sectionsElements[j]) {
                    card.render(this.sectionsElements[j]);
                }
            }
        }
    }
    async getData() {
        const dataSet = new Ressources();
        this.fetchedData = await dataSet.getProducts();
        this.ressources = this.fetchedData.map((product) => stringFormat(product.ressource));
        this.products = this.fetchedData.map((product) => {
            return product.data;
        });
    }
    async run() {
        try {
            await this.getData();
            this.buttonRender();
            this.sectionRender();
            this.cardRender();
            addAllButtonsEvents();
            return true;
        }
        catch (e) {
            console.warn(e);
            throw new Error("Error while running Body.run()");
        }
    }
}
export default Body;
//# sourceMappingURL=Body.js.map