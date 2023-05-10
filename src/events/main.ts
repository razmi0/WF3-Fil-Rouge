// Contain all the events for the buttons
// path : src/events/button-events.ts
//--

export function addAllButtonsEvents(): void {
  // buttonSort("#btn-all", "[data-type]");
  buttonSort("#btn-boissons", "[data-type='boissons']");
  buttonSort("#btn-desserts", "[data-type='desserts']");
  buttonSort("#btn-viandes", "[data-type='viandes']");
  buttonSort("#btn-glaces", "[data-type='glaces']");
  buttonSort("#btn-poissons", "[data-type='poissons']");
}

function changeButtonStyle(button: HTMLButtonElement): void {
  if (button.classList.contains("bg-3")) {
    button.classList.remove("bg-3");
    button.classList.add("bg-2");
  } else {
    button.classList.remove("bg-2");
    button.classList.add("bg-3");
  }
}

function changeSectionStyle(section: HTMLElement): void {
  if (section.classList.contains("d-none")) {
    section.classList.remove("d-none");
  } else {
    section.classList.add("d-none");
  }
}

function buttonSort(buttonId: string, secData: string) {
  const button = document.querySelector(`${buttonId}`) as HTMLButtonElement;
  const section = document.querySelectorAll(`${secData}`);
  button?.addEventListener("click", (e) => {
    changeButtonStyle(button);
    for (const el of section) {
      changeSectionStyle(el as HTMLElement);
    }
  });
}

export default addAllButtonsEvents;
