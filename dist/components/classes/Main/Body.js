// Body Components Rendering
// Path : src/components/classes/Body.ts
// --
// IMPORTS
import { StaticData, Button, Section, Ressources, Card, stringFormat, addAllButtonsEvents, } from "../../Modules.js";
class Body {
    fetchedData = [];
    ressources = [];
    products = [];
    sectionsElements = [];
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
                element: StaticData.buttonType,
                type: StaticData.buttonType,
                text: this.ressources[i],
                class: StaticData.buttonClass,
                id: `${StaticData.buttonId}${this.ressources[i]?.toLowerCase()}`,
            });
        }
        this.renderComponents(buttons, btnContainer, Button);
    }
    sectionRender() {
        const sections = [];
        const sectionsContainer = document.querySelector("#section-container");
        for (let i = 0; i < this.ressources.length; i++) {
            sections.push({
                element: StaticData.sectionType,
                class: StaticData.sectionClass,
                id: `${StaticData.sectionId}${this.ressources[i]?.toLowerCase()}`,
                data: `${this.ressources[i]?.toLowerCase()}`,
            });
        }
        this.renderComponents(sections, sectionsContainer, Section);
        const nodeList = document.querySelectorAll("section");
        this.sectionsElements = Array.from(nodeList);
    }
    cardRender() {
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
    async addEvents() {
        addAllButtonsEvents();
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
        const t1 = performance.now();
        try {
            await this.getData();
            this.buttonRender();
            this.sectionRender();
            this.cardRender();
            this.addEvents();
            const t2 = performance.now();
            console.log(`Body rendered in ${t2 - t1} milliseconds.`);
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