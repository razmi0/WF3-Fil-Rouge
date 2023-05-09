export interface Image {
    src: string;
    alt: string;
}
export type Images = Image[];
export interface Element {
    [key: string]: HTMLElement;
}
export type Elements = Element[];
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
    id: string;
}
export type ButtonElements = ButtonElement[];
export interface NavElement {
    menu: HTMLElement;
    toggleButton: HTMLElement;
    languageButtonFR: HTMLElement;
    languageButtonEN: HTMLElement;
    menuBurger: HTMLElement;
    toggleButtonBurger: HTMLElement;
}
export type NavElements = NavElements[];
//# sourceMappingURL=index-types.d.ts.map