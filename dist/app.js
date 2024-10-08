import { keepTalkingWordsData, morseCodeAlphabet } from "./data/data.js";
import { findWordsWithCharacters } from "./utils/findWordsWithCharacters.js";
import { renderWordsTable } from "./utils/renderWordsTable.js";
export const morseCodeInput = document.querySelector("#morseCodeInput");
const translationParagraph = document.querySelector(".translationParagraph");
const possibleWordsTable = document.querySelector(".possibleWordsTable");
const allWordsList = document.querySelector(".allWordsList");
// Buttons
const dashBtn = document.querySelector(".dash-btn");
const dotBtn = document.querySelector(".dot-btn");
const spaceBtn = document.querySelector(".space-btn");
const bacspaceBtn = document.querySelector(".bacspace-btn");
// Handling buttons
bacspaceBtn.addEventListener("click", () => {
    morseCodeInput.value = morseCodeInput.value.slice(0, -1);
    //trigger input eventlistner
    morseCodeInput.dispatchEvent(new Event("input"));
});
function handleButton(btnElement, value) {
    btnElement.addEventListener("click", () => {
        morseCodeInput.value += value;
        morseCodeInput.dispatchEvent(new Event("input"));
    });
}
handleButton(dashBtn, "-");
handleButton(dotBtn, ".");
handleButton(spaceBtn, " ");
// Handle user input & update translation
// Prevent invalid keys using keydown
morseCodeInput === null || morseCodeInput === void 0 ? void 0 : morseCodeInput.addEventListener("keydown", (e) => {
    const allowedKeys = [
        ".",
        "-",
        " ",
        "Backspace",
        "ArrowLeft",
        "ArrowRight",
        "Delete",
        "Tab",
    ];
    // allow ctrl combinations
    if (e.ctrlKey || e.metaKey)
        return;
    if (!allowedKeys.includes(e.key)) {
        e.preventDefault();
    }
});
morseCodeInput === null || morseCodeInput === void 0 ? void 0 : morseCodeInput.addEventListener("input", (e) => {
    if (morseCodeInput.value === "") {
        renderWordsTable(keepTalkingWordsData, possibleWordsTable);
        translationParagraph.textContent = "_";
        return;
    }
    let morseCode = morseCodeInput.value;
    const characters = convertMorseToEnglish(morseCode);
    translationParagraph.textContent = characters;
    //prevent
    if (characters.length === 0) {
        renderWordsTable([], possibleWordsTable);
        return;
    }
    const possibleWords = findWordsWithCharacters(characters, keepTalkingWordsData);
    renderWordsTable(possibleWords, possibleWordsTable);
});
function convertMorseToEnglish(morseString) {
    const characters = [];
    morseString.split(" ").forEach((morseChar) => {
        const char = morseCodeAlphabet.find((char) => char.morseCode === morseChar);
        char && characters.push(char.letter);
    });
    return characters.join("").toLowerCase();
}
renderWordsTable(keepTalkingWordsData, possibleWordsTable);
