// Components functions
// path : src/components/render/render.ts
//--
export function renderComponent({ options, parent, classe }) {
    options.forEach((option) => {
        const component = new classe(option);
        component.render(parent);
    });
}
export function initComponentsButtons() {
    const buttonBoissonOptions = {
        element: "button",
        type: "button",
        id: "btn-boisson",
        class: "btn btn-primary",
        text: "Boisson",
    };
    const buttonDessertOptions = {
        element: "button",
        type: "button",
        id: "btn-dessert",
        class: "btn btn-primary",
        text: "Dessert",
    };
    const buttonViandeOptions = {
        element: "button",
        type: "button",
        id: "btn-viande",
        class: "btn btn-primary",
        text: "Viande",
    };
    const buttonGlaceOptions = {
        element: "button",
        type: "button",
        id: "btn-glace",
        class: "btn btn-primary",
        text: "Glace",
    };
    const buttonPoissonOptions = {
        element: "button",
        type: "button",
        id: "btn-poisson",
        class: "btn btn-primary",
        text: "Poisson",
    };
    const array = [];
    array.push(buttonBoissonOptions);
    array.push(buttonDessertOptions);
    array.push(buttonViandeOptions);
    array.push(buttonGlaceOptions);
    array.push(buttonPoissonOptions);
    return array;
}
export function initComponentsSections() {
    const sectionBoissonOptions = {
        element: "section",
        id: "boisson",
        class: "boisson",
    };
    const sectionDessertOptions = {
        element: "section",
        id: "dessert",
        class: "dessert",
    };
    const sectionViandeOptions = {
        element: "section",
        id: "viande",
        class: "viande",
    };
    const sectionGlaceOptions = {
        element: "section",
        id: "glace",
        class: "glace",
    };
    const sectionPoissonOptions = {
        element: "section",
        id: "poisson",
        class: "poisson",
    };
    const array = [];
    array.push(sectionBoissonOptions);
    array.push(sectionDessertOptions);
    array.push(sectionViandeOptions);
    array.push(sectionGlaceOptions);
    array.push(sectionPoissonOptions);
    return array;
}
//# sourceMappingURL=init.js.map