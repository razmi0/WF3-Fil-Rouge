// Contain function used to render Section component and button component
// path : src/components/Classes/Main/Body.ts
//--
/**
 * @description Render Section components and Button components
 * @param {any[]} options
 * @param {HTMLElement} parent
 * @param {any} classe
 */
export function initComponents(options, parent, classe) {
    options.forEach((option) => {
        const component = new classe(option);
        component.render(parent);
    });
}
//# sourceMappingURL=body-render.js.map