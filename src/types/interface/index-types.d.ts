export interface Image {
    src: string;
    alt: string;
}
export type Images = Image[];
export interface Element {
    [key: string]: HTMLElement;
}
export type Elements = Element[];
export interface Product {
    data: [
        name: string,
        price: number,
        description: string,
        imageSrc: string,
        imageAlt: string
    ];
}
export type Products = Product[];
export interface CardType {
    name: string;
    price: number;
    description: string;
    imageSrc: string;
    imageAlt: string;
}
export type Cards = CardType[];
export interface SectionElement {
    element: string;
    class: string;
    id: string;
    data: string;
}
export type SectionElements = SectionElement[];
export interface ButtonElement {
    element: string;
    type: string;
    text: string | undefined;
    class: string;
    id: string | undefined;
}
export type ButtonElements = ButtonElement[];
//# sourceMappingURL=index-types.d.ts.map