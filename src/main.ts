// Description: Main file for the project
// path to the file: main.js
//--

// Imports
//--
import {
  Card,
  Button,
  Section,
  initComponentsButtons,
  initComponentsSections,
  renderComponent,
} from "./components/module.js";
import { Element, Elements, Images, Product } from "./interface/index-types.js";
import { validateImagesArray } from "./utils/image-validation.js";
//---------- Body Rendering ----------//
// details : from top to bottom
//--
// Buttons
//--

const btnContainer = document.querySelector("#btn-container") as HTMLDivElement;
const buttons = initComponentsButtons();
renderComponent({ options: buttons, parent: btnContainer, classe: Button });

// Sections with Cards
//--

const sectionContainer = document.querySelector(
  "#section-container"
) as HTMLDivElement;
const sections = initComponentsSections();
renderComponent({
  options: sections,
  parent: sectionContainer,
  classe: Section,
});

// HTML Elements
//--
const elements: Element = {
  boisson: document.querySelector("#boisson") as HTMLElement,
  dessert: document.querySelector("#dessert") as HTMLElement,
  viande: document.querySelector("#viande") as HTMLElement,
  glace: document.querySelector("#glace") as HTMLElement,
  poisson: document.querySelector("#poisson") as HTMLElement,
};

// Images Array
//--
const images: Images = [
  {
    src: "./dist/assets/images/IMG_6600.svg",
    alt: "produit 1",
  },
  {
    src: "./dist/assets/images/IMG_6602.svg",
    alt: "produit 2",
  },
  {
    src: "./dist/assets/images/IMG_6603.svg",
    alt: "produit 3",
  },
  {
    src: "./dist/assets/images/IMG_6605.svg",
    alt: "produit 4",
  },
  {
    src: "./dist/assets/images/IMG_6606.svg",
    alt: "produit 5",
  },
  {
    src: "./dist/assets/images/IMG_6609.svg",
    alt: "produit 6",
  },
];
const validatedImages = validateImagesArray(images);

//Products
//--





// Cards
//--
