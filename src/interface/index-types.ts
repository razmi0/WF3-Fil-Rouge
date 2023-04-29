// Files containing declarations of all interfaces and types used in the project
// path : src/interface/index-types.ts
//--

// TYPE IMAGE
interface Image {
  src: string;
  alt: string;
}
type Images = Image[];

// TYPE ELEMENT
interface Element {
  [key: string]: HTMLElement;
}
type Elements = Element[];

// TYPE PRODUCT
interface Product {
  name: string;
  price: number;
  description?: string;
  imageSrc: string;
  imageAlt: string;
}
type Products = Product[];

// TYPE BUTTON ELEMENT
interface ButtonElement {
  element: string;
  type: string;
  text: string;
  class: string;
  id: string;
}
type ButtonElements = ButtonElement[];

// TYPE SECTION ELEMENT
interface SectionElement {
  element: string;
  class: string;
  id: string;
}
type SectionElements = SectionElement[];

export {
  Image,
  Images,
  Element,
  Elements,
  Product,
  Products,
  ButtonElement,
  ButtonElements,
  SectionElement,
  SectionElements,
};
