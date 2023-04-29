import { ButtonElement } from "../../interface/index-types.js";
declare class Button {
    private element;
    private type;
    private text;
    private class;
    private id;
    constructor(buttonOptions: ButtonElement);
    private template;
    render(element: HTMLDivElement): void;
}
export default Button;
//# sourceMappingURL=Button.d.ts.map