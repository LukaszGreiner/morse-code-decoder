import {
  bacspaceBtn,
  morseCodeInput,
  dotBtn,
  dashBtn,
  spaceBtn,
} from "./morseCodeInput";

function handleMorseButtons() {
  function handleButton(btnElement: HTMLButtonElement, value?: string) {
    btnElement.addEventListener("click", () => {
      btnElement === bacspaceBtn
        ? (morseCodeInput.value = morseCodeInput.value.slice(0, -1))
        : (morseCodeInput.value += value);
      morseCodeInput.dispatchEvent(new Event("input"));
    });
  }

  handleButton(dotBtn, ".");
  handleButton(dashBtn, "-");
  handleButton(spaceBtn, " ");
  handleButton(bacspaceBtn);
}

export { handleMorseButtons };
