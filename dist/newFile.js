import { morseCodeInput, possibleWordsTable, convertMorseToEnglish, translationParagraph, findWordsWithCharacters, } from "./app";
import { allWords } from "./data/data";
import { renderWordsTable } from "./helpers/renderWordsTable";
// Handle user input & update translation
// Prevent invalid keys using keydown
morseCodeInput.addEventListener("keydown", (e) => {
    const allowedKeys = [
        ".",
        "-",
        " ",
        "Backspace",
        "ArrowLeft",
        "ArrowRight",
        "Delete",
    ];
    // allow ctrl combinations
    if (e.ctrlKey || e.metaKey)
        return;
    if (!allowedKeys.includes(e.key)) {
        e.preventDefault();
    }
});
morseCodeInput.addEventListener("input", (e) => {
    if (morseCodeInput.value === "")
        renderWordsTable(allWords, possibleWordsTable);
    let morseCode = morseCodeInput.value;
    const characters = convertMorseToEnglish(morseCode);
    translationParagraph.textContent = characters;
    if (characters.length === 0)
        return;
    const possibleWords = findWordsWithCharacters(characters, allWords);
    renderWordsTable(possibleWords, possibleWordsTable);
});
