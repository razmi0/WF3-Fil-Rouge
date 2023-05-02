// Contain all the API services related to product
// Path : src/services/product.ts
//--


// GET
//--

export async function getProduits(urls: URL[]) {
  const array = [];
  try {
    for (let i = 0; i < urls.length; i++) {
      //@ts-ignore
      const req = await fetch(urls[i]);
      const data = await req.json();
      //@ts-ignore
      array.push({ data: data, ressource: urls[i]?.pathname.replaceAll("/", "") });
    }
  } catch (error) {
    console.warn(error);
  }
  return array;
}
