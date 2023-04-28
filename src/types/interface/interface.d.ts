export type Images = {
    src: string;
    alt: string;
}[];
export type Elements = {
    [key: string]: HTMLElement;
};
export interface Product {
    name: string;
    price: number;
    description?: string;
    imageSrc: string;
    imageAlt: string;
}
export interface ButtonElement {
    element: string;
    type: string;
    text: string;
    class: string;
    id: string;
}
export interface SectionElement {
    element: string;
    class: string;
    id: string;
}
//# sourceMappingURL=interface.d.ts.map