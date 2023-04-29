interface Image {
    src: string;
    alt: string;
}
type Images = Image[];
interface Element {
    [key: string]: HTMLElement;
}
type Elements = Element[];
interface Product {
    name: string;
    price: number;
    description?: string;
    imageSrc: string;
    imageAlt: string;
}
type Products = Product[];
interface ButtonElement {
    element: string;
    type: string;
    text: string;
    class: string;
    id: string;
}
type ButtonElements = ButtonElement[];
interface SectionElement {
    element: string;
    class: string;
    id: string;
}
type SectionElements = SectionElement[];
export { Image, Images, Element, Elements, Product, Products, ButtonElement, ButtonElements, SectionElement, SectionElements, };
//# sourceMappingURL=index-types.d.ts.map