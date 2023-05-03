// Contain class Products that essentially fetch data from the API
// path : src/components/classes/Product.ts
//--

import { endpoints } from "../../services/endpoints.js";

class Ressources {
  constructor() {}

  private async fetchProductsData(): Promise<
    { data: any; ressource: string | undefined }[]
  > {
    const allProducts = [];
    try {
      for (let i = 0; i < endpoints.length; i++) {
        //@ts-ignore
        const req = await fetch(endpoints[i]);
        const res = await req.json();
        //@ts-ignore
        allProducts.push({
          data: res,
          ressource: endpoints[i]?.pathname.replaceAll("/", ""),
        });
      }
    } catch (error : any) {
      throw new Error(error);
    }
    return allProducts;
  }

  public async getProducts(): Promise<{ data: any; ressource: string | undefined } []> {
    return await this.fetchProductsData();
  }
}


export default Ressources;