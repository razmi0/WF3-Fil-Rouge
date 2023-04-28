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
} from "./components/ComponentsModule.js";
import { Elements, Images, Product } from "./interface/interface.js";

//---------- Body Rendering ----------//
// details : from top to bottom
//--
// Buttons
//--

const btnContainer = document.querySelector("#btn-container") as HTMLDivElement;
const buttons = initComponentsButtons();
renderComponent(buttons, btnContainer, Button);

// Sections with Cards
//--

const sectionContainer = document.querySelector(
  "#section-container"
) as HTMLDivElement;
const sections = initComponentsSections();
renderComponent(sections, sectionContainer, Section);

// HTML Elements
//--
const elements: Elements = {
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

for (let image of images) {
  if (!image) {
    image = {
      src: "./dist/assets/images/logo/logo.jpg",
      alt: "default image",
    };
  }
}

//Products
//--

const product1: Product = {
  name: "Pièce de boeuf",
  price: 15,
  description: "Une pièce de boeuf de 500g",
  imageSrc: images[0].src,
  imageAlt: images[0].alt,
};

// Cards
//--
const card1 = new Card(product1);
card1.render(elements.viande);
