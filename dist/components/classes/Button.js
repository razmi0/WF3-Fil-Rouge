// Description: Contient le template de Button
// path to the file: src/templates/classes/Button.ts
//--
class Button {
    element;
    type;
    text;
    class;
    id;
    constructor(buttonOptions) {
        this.element = buttonOptions.element;
        this.type = buttonOptions.type;
        this.text = buttonOptions.text;
        this.class = buttonOptions.class;
        this.id = buttonOptions.id;
    }
    template() {
        return `
            <${this.element}
             type="${this.type}" 
             class="${this.class}"
              id="${this.id}">
              ${this.text}
              </${this.element}>
            `;
    }
    render(element) {
        element.innerHTML += this.template();
    }
}
export default Button;
//# sourceMappingURL=Button.js.map