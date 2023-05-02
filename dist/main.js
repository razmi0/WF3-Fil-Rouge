// Description: Main file for the project
// path to the file: main.js
//
//--
// Imports
//--
import { Button, renderComponent } from "./components/module.js";
import { endpoints } from "./services/endpoints.js";
import { getProduits } from "./services/product.js";
import { removeFalsy, stringFormat } from "./utils/data-validation.js";
//------------------------------------//
//---------- Body Rendering ----------//
//------------------------------------//
// Fetching Data Products
//--
const products = await getProduits(endpoints);
console.log(products);
// Preparing Buttons Elements
//--
const ressources = products.map((product) => {
    product.ressource = removeFalsy(product.ressource);
    // @ts-expect-error /** flag pour return false ou pas sur removeFalsy */
    if (product.ressource === false) {
        throw new Error("Ressource is not defined");
    }
    return (product.ressource = stringFormat(product.ressource));
});
console.log(ressources);
// Buttons Rendering
//--
const buttons = [];
const btnContainer = document.querySelector("#btn-container");
for (let i = 0; i < ressources.length; i++) {
    buttons.push({
        element: "button",
        type: "button",
        text: ressources[i],
        class: "btn bg-3",
        id: ressources[i]?.charAt(0).toLowerCase(),
    });
}
renderComponent(buttons, btnContainer, Button);
console.log(products);
// Preparing Sections Elements
//--
// const sections: Element = {
//   boisson: document.querySelector("#boisson") as HTMLElement,
//   dessert: document.querySelector("#dessert") as HTMLElement,
//   viande: document.querySelector("#viande") as HTMLElement,
//   glace: document.querySelector("#glace") as HTMLElement,
//   poisson: document.querySelector("#poisson") as HTMLElement,
// };
// Products Rendering
//--
// @ts-ignore
// renderComponent(products[0]?.data, sections.boisson, Card);
// const products: Product[] = [
//   {
//     name: "Boisson 1",
//     price: 10,
//     description: "Description du produit 1",
//     imageSrc: validatedImages[0].src,
//     imageAlt: validatedImages[0].alt,
//   },
//   {
//     name: "Dessert 2",
//     price: 20,
//     description: "Description du produit 2",
//     imageSrc: validatedImages[1].src,
//     imageAlt: validatedImages[1].alt,
//   },
//   {
//     name: "Viande 3",
//     price: 30,
//     description: "Description du produit 3",
//     imageSrc: validatedImages[2].src,
//     imageAlt: validatedImages[2].alt,
//   },
//   {
//     name: "Glace 4",
//     price: 40,
//     description: "Description du produit 4",
//     imageSrc: validatedImages[3].src,
//     imageAlt: validatedImages[3].alt,
//   },
//   {
//     name: "Poisson 5",
//     price: 50,
//     description: "Description du produit 5",
//     imageSrc: validatedImages[4].src,
//     imageAlt: validatedImages[4].alt,
//   },
//   {
//     name: "Boisson 6",
//     price: 60,
//     description: "Description du produit 6",
//     imageSrc: validatedImages[5].src,
//     imageAlt: validatedImages[5].alt,
//   },
//   {
//     name: "Dessert 7",
//     price: 70,
//     description: "Description du produit 7",
//     imageSrc: validatedImages[6].src,
//     imageAlt: validatedImages[6].alt,
//   },
//   {
//     name: "Viande 8",
//     price: 80,
//     description: "Description du produit 8",
//     imageSrc: validatedImages[7].src,
//     imageAlt: validatedImages[7].alt,
//   },
//   {
//     name: "Glace 9",
//     price: 90,
//     description: "Description du produit 9",
//     imageSrc: validatedImages[8].src,
//     imageAlt: validatedImages[8].alt,
//   },
//   {
//     name: "Poisson 10",
//     price: 100,
//     description: "Description du produit 10",
//     imageSrc: validatedImages[9].src,
//     imageAlt: validatedImages[9].alt,
//   },
//   {
//     name: "Boisson 11",
//     price: 110,
//     description: "Description du produit 11",
//     imageSrc: validatedImages[10].src,
//     imageAlt: validatedImages[10].alt,
//   },
//   {
//     name: "Dessert 12",
//     price: 120,
//     description: "Description du produit 12",
//     imageSrc: validatedImages[11].src,
//     imageAlt: validatedImages[11].alt,
//   },
//   {
//     name: "Viande 13",
//     price: 130,
//     description: "Description du produit 13",
//     imageSrc: validatedImages[12].src,
//     imageAlt: validatedImages[12].alt,
//   },
//   {
//     name: "Glace 14",
//     price: 140,
//     description: "Description du produit 14",
//     imageSrc: validatedImages[13].src,
//     imageAlt: validatedImages[13].alt,
//   },
// ];
// Cards
//--
// const card1 = new Card(products[0]);
// const card2 = new Card(products[1]);
// const card3 = new Card(products[2]);
// const card4 = new Card(products[3]);
// const card5 = new Card(products[4]);
// const card6 = new Card(products[5]);
// const card7 = new Card(products[6]);
// const card8 = new Card(products[7]);
// const card9 = new Card(products[8]);
// const card10 = new Card(products[9]);
// const card11 = new Card(products[10]);
// const card12 = new Card(products[11]);
// const card13 = new Card(products[12]);
// const card14 = new Card(products[13]);
// card1.render(sections.boisson);
// card2.render(sections.dessert);
// card3.render(sections.viande);
// card4.render(sections.glace);
// card5.render(sections.poisson);
// card6.render(sections.boisson);
// card7.render(sections.dessert);
// card8.render(sections.viande);
// card9.render(sections.glace);
// card10.render(sections.poisson);
// card11.render(sections.boisson);
// card12.render(sections.dessert);
// card13.render(sections.viande);
// card14.render(sections.glace);
// addAllButtonsEvents();
// addAllButtonsEvents();
//# sourceMappingURL=main.js.map