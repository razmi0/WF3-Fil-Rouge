// Contain class Products that essentially fetch data from the API
// path : src/components/classes/Product.ts
//--
import { endpoints } from "../../services/endpoints.js";
class Ressources {
    constructor() { }
    async fetchProductsData() {
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