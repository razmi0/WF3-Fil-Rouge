export type Images = {
  src: string | null ;
  alt: string | null ;
}[];

export type Elements = {
  [key: string]: HTMLElement | null;
}

export type Product = {
  name: string;
  price: number;
  description?: string;
  imageSrc: string | null;
  imageAlt: string | null;
}
