// Contain class Products that essentially fetch data from the API
// path : src/components/classes/Product.ts
//--

import { StaticData } from "../../Modules.js";

class Ressources {
  constructor() {}

  private async fetchProductsData(): Promise<
    { data: any; ressource: string }[]
  > {
    const allProducts: { data: string; ressource: string }[] = [];
    try {
      for (let i = 0; i < StaticData.endpoints.length; i++) {
        if (StaticData.endpoints[i]) {
          // @ts-ignore
          const req = await fetch(StaticData.endpoints[i]);
          const res = await req.json();
          allProducts.push({
            data: res,
            // @ts-ignore
            ressource: StaticData.endpoints[i].pathname.replaceAll("/", ""),
          });
        } else {
          throw new Error("Endpoint Array is not defined");
        }
      }
    } catch (error: any) {
      throw new Error(error);
    }
    return allProducts;
  }

  public async getProducts(): Promise<
    { data: any; ressource: string}[]
  > {
    return await this.fetchProductsData();
  }
}

export default Ressources;
