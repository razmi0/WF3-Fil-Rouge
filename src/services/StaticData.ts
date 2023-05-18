// Contain all the values of the attributes of the html elements
// path : src/components/classes/html-data/attributes-values.ts
//--

class StaticData {
  
  //Ressources
  public static readonly endpoints: URL[] = [
    new URL("http://localhost:3000/boisson"),
    new URL("http://localhost:3000/dessert"),
    new URL("http://localhost:3000/glace"),
    new URL("http://localhost:3000/viande"),
    new URL("http://localhost:3000/poisson"),
  ];
  //-- Nav & Hero
  public static readonly imagePath: string = "../../../public/assets/images";
  //-- Buttons
  public static readonly sectionClass: string = "products";
  public static readonly sectionType: string = "section";
  public static readonly sectionId: string = "sec-";
  //-- Sections
  public static readonly buttonClass: string = "btn bg-3 ";
  public static readonly buttonType: string = "button";
  public static readonly buttonId: string = "btn-";
}

export default StaticData;
