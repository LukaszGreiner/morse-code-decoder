import { morseCodeInput } from "./app";
export function handleButtons() {
    // Buttons
    const dashBtn = document.querySelector(".dash-btn");
    const dotBtn = document.querySelector(".dot-btn");
    const spaceBtn = document.querySelector(".space-btn");
    const bacspaceBtn = document.querySelector(".bacspace-btn");
    const larrBtn = document.querySelector(".larr-btn");
    const rarrBtn = document.querySelector(".rarr-btn");
    // Handle buttons
    bacspaceBtn.addEventListener("click", () => {
        morseCodeInput.focus();
        morseCodeInput.value = morseCodeInput.value.slice(0, -1);
        //trigger input eventlistner
        morseCodeInput.dispatchEvent(new Event("input"));
    });
    function handleButton(btnElement, value) {
        btnElement.addEventListener("click", () => {
            morseCodeInput.focus();
            morseCodeInput.value += value;
            morseCodeInput.dispatchEvent(new Event("input"));
        });
    }
    handleButton(dashBtn, "-");
    handleButton(dotBtn, ".");
    handleButton(spaceBtn, " ");
}
