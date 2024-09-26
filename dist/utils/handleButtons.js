import { morseCodeInput } from "../app";
export function handleButtons() {
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
    console.log("work");
}
