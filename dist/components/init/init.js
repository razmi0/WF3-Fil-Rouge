// Components functions
// path : src/components/render/render.ts
//--
/**
 * @Declare and render the component with all given options
 * @param {any[]} options
 * @param {HTMLElement} parent
 * @param {any} classe
 */
export function renderComponent(options, parent, classe) {
    options.forEach((option) => {
        const component = new classe(option);
        component.render(parent);
    });
}
//# sourceMappingURL=init.js.map