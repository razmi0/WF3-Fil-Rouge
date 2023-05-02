// Components functions
// path : src/components/render/render.ts
//--


/**
 * @Declare and render the component with all given options
 * @param {any[]} options 
 * @param {HTMLElement} parent 
 * @param {any} classe 
 */
export function renderComponent(options : any[], parent : HTMLElement, classe : any): void {
  options.forEach((option) => {
    const component = new classe(option);
    component.render(parent);
  });
}

