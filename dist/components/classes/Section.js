// Description: Contient le template de Section
// path to the file: src/templates/classes/Section.ts
//--
class Section {
    element;
    class;
    id;
    constructor(SectionOptions) {
        this.element = SectionOptions.element;
        this.class = SectionOptions.class;
        this.id = SectionOptions.id;
    }
    template() {
        return `
            <${this.element}
             class="${this.class}"
              id="${this.id}">
              </${this.element}>
            `;
    }
    render(element) {
        element.innerHTML += this.template();
    }
}
export default Section;
