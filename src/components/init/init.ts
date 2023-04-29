// Components functions
// path : src/components/render/render.ts
//--

import { ButtonElement, SectionElement } from "../../interface/index-types.js";



export function renderComponent(
{ options, parent, classe }: { options: any[]; parent: HTMLElement; classe: any; }): void {
  options.forEach((option: {}) => {
    const component = new classe(option);
    component.render(parent);
  });
}

export function initComponentsButtons(): ButtonElement[] {
  const buttonBoissonOptions: ButtonElement = {
    element: "button",
    type: "button",
    id: "btn-boisson",
    class: "btn btn-primary",
    text: "Boisson",
  };
  const buttonDessertOptions: ButtonElement = {
    element: "button",
    type: "button",
    id: "btn-dessert",
    class: "btn btn-primary",
    text: "Dessert",
  };
  const buttonViandeOptions: ButtonElement = {
    element: "button",
    type: "button",
    id: "btn-viande",
    class: "btn btn-primary",
    text: "Viande",
  };
  const buttonGlaceOptions: ButtonElement = {
    element: "button",
    type: "button",
    id: "btn-glace",
    class: "btn btn-primary",
    text: "Glace",
  };
  const buttonPoissonOptions: ButtonElement = {
    element: "button",
    type: "button",
    id: "btn-poisson",
    class: "btn btn-primary",
    text: "Poisson",
  };
  const array = [];
  array.push(buttonBoissonOptions);
  array.push(buttonDessertOptions);
  array.push(buttonViandeOptions);
  array.push(buttonGlaceOptions);
  array.push(buttonPoissonOptions);
  return array;
}

export function initComponentsSections(): SectionElement[] {
  const sectionBoissonOptions: SectionElement = {
    element: "section",
    id: "boisson",
    class: "boisson",
  };
  const sectionDessertOptions: SectionElement = {
    element: "section",
    id: "dessert",
    class: "dessert",
  };
  const sectionViandeOptions: SectionElement = {
    element: "section",
    id: "viande",
    class: "viande",
  };
  const sectionGlaceOptions: SectionElement = {
    element: "section",
    id: "glace",
    class: "glace",
  };
  const sectionPoissonOptions: SectionElement = {
    element: "section",
    id: "poisson",
    class: "poisson",
  };
  const array = [];
  array.push(sectionBoissonOptions);
  array.push(sectionDessertOptions);
  array.push(sectionViandeOptions);
  array.push(sectionGlaceOptions);
  array.push(sectionPoissonOptions);
  return array;
}
