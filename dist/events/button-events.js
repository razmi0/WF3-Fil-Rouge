// Contain all the events for the buttons
// path : src/events/button-events.ts
//--
export function addAllButtonsEvents() {
    // buttonSort("#btn-all", "[data-type]");
    buttonSort("#btn-boissons", "#sec-boissons");
    buttonSort("#btn-desserts", "#sec-desserts");
    buttonSort("#btn-viandes", "#sec-viandes");
    buttonSort("#btn-glaces", "#sec-glaces");
    buttonSort("#btn-poissons", "#sec-poissons");
}
function changeButtonStyle(button) {
    if (button.classList.contains("bg-3")) {
        button.classList.remove("bg-3");
        button.classList.add("bg-2");
    }
    else {
        button.classList.remove("bg-2");
        button.classList.add("bg-3");
    }
}
function changeSectionStyle(section) {
    if (section.classList.contains("d-none")) {
        section.classList.remove("d-none");
    }
    else {
        section.classList.add("d-none");
    }
}
function buttonSort(buttonId, sectionId) {
    const button = document.querySelector(`${buttonId}`);
    const section = document.querySelectorAll(`${sectionId}`);
    button?.addEventListener("click", (e) => {
        console.log("click");
        changeButtonStyle(button);
        for (const el of section) {
            changeSectionStyle(el);
        }
    });
}
export default addAllButtonsEvents;
//# sourceMappingURL=button-events.js.map