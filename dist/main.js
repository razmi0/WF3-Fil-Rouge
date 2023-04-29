// Description: Main file for the project
// path to the file: main.js
//--
// Imports
//--
import { Button, Section, initComponentsButtons, initComponentsSections, renderComponent, } from "./components/module.js";
import { validateImagesArray } from "./utils/img-validation.js";
//---------- Body Rendering ----------//
// details : from top to bottom
//--
// Buttons
//--
const btnContainer = document.querySelector("#btn-container");
const buttons = initComponentsButtons();
renderComponent({ options: buttons, parent: btnContainer, classe: Button });
// Sections with Cards
//--
const sectionContainer = document.querySelector("#section-container");
const sections = initComponentsSections();
renderComponent({
    options: sections,
    parent: sectionContainer,
    classe: Section,
});
// HTML Elements
//--
const elements = {
    boisson: document.querySelector("#boisson"),
    dessert: document.querySelector("#dessert"),
    viande: document.querySelector("#viande"),
    glace: document.querySelector("#glace"),
    poisson: document.querySelector("#poisson"),
};
// Images Array
//--
const images = [
    {
        src: "./public/assets/images/IMG_6600.svg",
        alt: "produit 1",
    },
    {
        src: "./public/assets/images/IMG_6602.svg",
        alt: "produit 2",
    },
    {
        src: "./public/assets/images/IMG_6603.svg",
        alt: "produit 3",
    },
    {
        src: "./public/assets/images/IMG_6605.svg",
        alt: "produit 4",
    },
    {
        src: "./public/assets/images/IMG_6606.svg",
        alt: "produit 5",
    },
    {
        src: "./public/assets/images/IMG_6609.svg",
        alt: "produit 6",
    },
];
const validatedImages = validateImagesArray(images);
console.log(validatedImages);
//Products
//--
// Cards
//--
//# sourceMappingURL=main.js.map