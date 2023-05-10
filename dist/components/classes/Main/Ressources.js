// Contain class Products that essentially fetch data from the API
// path : src/components/classes/Product.ts
//--
import { StaticData } from "../../Modules.js";
class Ressources {
    constructor() { }
    async fetchProductsData() {
        const allProducts = [];
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
                }
                else {
                    throw new Error("Endpoint Array is not defined");
                }
            }
        }
        catch (error) {
            throw new Error(error);
        }
        return allProducts;
    }
    async getProducts() {
        return await this.fetchProductsData();
    }
}
export default Ressources;
//# sourceMappingURL=Ressources.js.map