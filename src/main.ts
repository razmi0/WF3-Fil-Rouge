// Description: Main file for the project
// path to the file: main.js
//@ts-nocheck
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
import addAllButtonsEvents from "./events/button-events.js";
import { Element, Elements, Images, Product } from "./interface/index-types.js";
import { validateImagesArray } from "./utils/img-validation.js";
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
  {
    src: "./public/assets/images/IMG_6609.svg",
    alt: "produit 7",
  },
  {
    src: "./public/assets/images/IMG_6600.svg",
    alt: "produit 8",
  },
  {
    src: "./public/assets/images/IMG_6602.svg",
    alt: "produit 9",
  },
  {
    src: "./public/assets/images/IMG_6603.svg",
    alt: "produit 10",
  },
  {
    src: "./public/assets/images/IMG_6605.svg",
    alt: "produit 11",
  },
  {
    src: "./public/assets/images/IMG_6606.svg",
    alt: "produit 12",
  },
  {
    src: "./public/assets/images/IMG_6609.svg",
    alt: "produit 13",
  },
  {
    src: "./public/assets/images/IMG_6609.svg",
    alt: "produit 14",
  }

];
const validatedImages = validateImagesArray(images);



//Products
//--

const products: Product[] = [
  {
    name: "Boisson 1",
    price: 10,
    description: "Description du produit 1",
    imageSrc: validatedImages[0].src,
    imageAlt: validatedImages[0].alt,
  },
  {
    name: "Dessert 2",
    price: 20,
    description: "Description du produit 2",
    imageSrc: validatedImages[1].src,
    imageAlt: validatedImages[1].alt,
  },
  {
    name: "Viande 3",
    price: 30,
    description: "Description du produit 3",
    imageSrc: validatedImages[2].src,
    imageAlt: validatedImages[2].alt,
  },
  {
    name: "Glace 4",
    price: 40,
    description: "Description du produit 4",
    imageSrc: validatedImages[3].src,
    imageAlt: validatedImages[3].alt,
  },
  {
    name: "Poisson 5",
    price: 50,
    description: "Description du produit 5",
    imageSrc: validatedImages[4].src,
    imageAlt: validatedImages[4].alt,
  },
  {
    name: "Boisson 6",
    price: 60,
    description: "Description du produit 6",
    imageSrc: validatedImages[5].src,
    imageAlt: validatedImages[5].alt,
  },
  {
    name: "Dessert 7",
    price: 70,
    description: "Description du produit 7",
    imageSrc: validatedImages[6].src,
    imageAlt: validatedImages[6].alt,
  },
  {
    name: "Viande 8",
    price: 80,
    description: "Description du produit 8",
    imageSrc: validatedImages[7].src,
    imageAlt: validatedImages[7].alt,
  },
  {
    name: "Glace 9",
    price: 90,
    description: "Description du produit 9",
    imageSrc: validatedImages[8].src,
    imageAlt: validatedImages[8].alt,
  },
  {
    name: "Poisson 10",
    price: 100,
    description: "Description du produit 10",
    imageSrc: validatedImages[9].src,
    imageAlt: validatedImages[9].alt,
  },
  {
    name: "Boisson 11",
    price: 110,
    description: "Description du produit 11",
    imageSrc: validatedImages[10].src,
    imageAlt: validatedImages[10].alt,
  },
  {
    name: "Dessert 12",
    price: 120,
    description: "Description du produit 12",
    imageSrc: validatedImages[11].src,
    imageAlt: validatedImages[11].alt,
  },
  {
    name: "Viande 13",
    price: 130,
    description: "Description du produit 13",
    imageSrc: validatedImages[12].src,
    imageAlt: validatedImages[12].alt,
  },
  {
    name: "Glace 14",
    price: 140,
    description: "Description du produit 14",
    imageSrc: validatedImages[13].src,
    imageAlt: validatedImages[13].alt,
  },
];



// Cards
//--

const card1 = new Card(products[0]);
const card2 = new Card(products[1]);
const card3 = new Card(products[2]);
const card4 = new Card(products[3]);
const card5 = new Card(products[4]);
const card6 = new Card(products[5]);
const card7 = new Card(products[6]);
const card8 = new Card(products[7]);
const card9 = new Card(products[8]);
const card10 = new Card(products[9]);
const card11 = new Card(products[10]);
const card12 = new Card(products[11]);
const card13 = new Card(products[12]);
const card14 = new Card(products[13]);



card1.render(elements.boisson);
card2.render(elements.dessert);
card3.render(elements.viande);
card4.render(elements.glace);
card5.render(elements.poisson);
card6.render(elements.boisson);
card7.render(elements.dessert);
card8.render(elements.viande);
card9.render(elements.glace);
card10.render(elements.poisson);
card11.render(elements.boisson);
card12.render(elements.dessert);
card13.render(elements.viande);
card14.render(elements.glace);


addAllButtonsEvents();