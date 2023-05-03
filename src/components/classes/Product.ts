// Contain the class Product
// path : src/components/classes/Product.ts
//--

import Card from "./Card.js";
import { CardType } from "src/interface/index-types.js";

class Product {
  private el: HTMLElement;
  constructor(element: HTMLElement) {
    this.el = element;
  }

  
}

export default Product;