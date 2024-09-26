import { allWords, morseCodeAlphabet } from "../data/data.js";
import { renderWordsTable } from "./renderWordsTable.js";
export const morseCodeInput = document.querySelector("#morseCodeInput");
const translationParagraph = document.querySelector(".translationParagraph");
const possibleWordsTable = document.querySelector(".possibleWordsTable");
const allWordsList = document.querySelector(".allWordsList");
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
        renderWordsTable(allWords, possibleWordsTable);
        translationParagraph.textContent = "";
        return;
    }
    let morseCode = morseCodeInput.value;
    const characters = convertMorseToEnglish(morseCode);
    translationParagraph.textContent = characters;
    console.log(characters);
    //prevent
    if (characters.length === 0) {
        renderWordsTable([], possibleWordsTable);
        return;
    }
    const possibleWords = findWordsWithCharacters(characters, allWords);
    renderWordsTable(possibleWords, possibleWordsTable);
});
function convertMorseToEnglish(morseString) {
    const characters = [];
    morseString.split(" ").forEach((morseChar) => {
        const char = morseCodeAlphabet.find((char) => char.morseCode === morseChar);
        char && characters.push(char.letter);
    });
    console.log(characters);
    return characters.join("").toLowerCase();
}
function findWordsWithCharacters(characters, wordsArray) {
    const characterSet = new Set(characters);
    const matchingWords = [];
    for (const word of wordsArray) {
        const wordSet = new Set(word);
        if (Array.from(characterSet).every((char) => wordSet.has(char)))
            matchingWords.push(word);
    }
    console.log(characterSet);
    return matchingWords;
}
// renderWordsTable([], possibleWordsTable);
renderWordsTable(allWords, possibleWordsTable);
