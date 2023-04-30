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
    const buttonAllOptions = {
        element: "button",
        type: "button",
        id: "btn-all",
        class: "btn bg-3",
        text: "All",
    };
    const buttonBoissonOptions = {
        element: "button",
        type: "button",
        id: "btn-boisson",
        class: "btn bg-3 ",
        text: "Boisson",
    };
    const buttonDessertOptions = {
        element: "button",
        type: "button",
        id: "btn-dessert",
        class: "btn bg-3",
        text: "Dessert",
    };
    const buttonViandeOptions = {
        element: "button",
        type: "button",
        id: "btn-viande",
        class: "btn bg-3 ",
        text: "Viande",
    };
    const buttonGlaceOptions = {
        element: "button",
        type: "button",
        id: "btn-glace",
        class: "btn bg-3 ",
        text: "Glace",
    };
    const buttonPoissonOptions = {
        element: "button",
        type: "button",
        id: "btn-poisson",
        class: "btn bg-3 ",
        text: "Poisson",
    };
    const array = [];
    array.push(buttonAllOptions);
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
        class: "d-flex d-none",
        data: "boisson"
    };
    const sectionDessertOptions = {
        element: "section",
        id: "dessert",
        class: "d-flex d-none",
        data: "dessert"
    };
    const sectionViandeOptions = {
        element: "section",
        id: "viande",
        class: "d-flex d-none",
        data: "viande"
    };
    const sectionGlaceOptions = {
        element: "section",
        id: "glace",
        class: "d-flex d-none",
        data: "glace"
    };
    const sectionPoissonOptions = {
        element: "section",
        id: "poisson",
        class: "d-flex d-none",
        data: "poisson"
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