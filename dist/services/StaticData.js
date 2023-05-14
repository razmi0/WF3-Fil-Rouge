// Contain all the values of the attributes of the html elements
// path : src/components/classes/html-data/attributes-values.ts
//--
class StaticData {
    //Ressources
    static endpoints = [
        new URL("http://localhost:3000/boisson"),
        new URL("http://localhost:3000/dessert"),
        new URL("http://localhost:3000/glace"),
        new URL("http://localhost:3000/viande"),
        new URL("http://localhost:3000/poisson"),
    ];
    //-- Nav & Hero
    static imagePath = "../../../public/assets/images";
    //-- Buttons
    static sectionClass = "accordion accordion-flush";
    static sectionType = "section";
    static sectionId = "accordion sec-";
    //-- Sections
    static buttonClass = "btn bg-3 ";
    static buttonType = "button";
    static buttonId = "btn-";
}
export default StaticData;
//# sourceMappingURL=StaticData.js.map