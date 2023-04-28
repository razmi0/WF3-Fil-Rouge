import { HeadTemplate } from "../../barrel.js";
declare class Head {
    private metaCharset;
    private metaViewport;
    private icon;
    private title;
    private metaDescription;
    private metaKeywords;
    private metaAuthor;
    constructor(headOptions: HeadTemplate);
    private template;
    render(element: HTMLElement): void;
}
export default Head;
//# sourceMappingURL=Head.d.ts.map