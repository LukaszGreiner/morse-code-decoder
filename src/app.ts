import { allWords, morseCodeAlphabet } from "./data/data.js";
import { renderWordsTable } from "./utils/renderWordsTable.js";

const morseCodeInput = document.querySelector(
  "#morseCodeInput"
) as HTMLInputElement;

const translationParagraph = document.querySelector(
  ".translationParagraph"
) as HTMLElement;

const possibleWordsTable = document.querySelector(
  ".possibleWordsTable"
) as HTMLElement;
const allWordsList = document.querySelector(".allWordsList") as HTMLElement;

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
  if (e.ctrlKey || e.metaKey) return;

  if (!allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
});

morseCodeInput.addEventListener("input", (e) => {
  if (morseCodeInput.value === "") renderWordsTable([], possibleWordsTable);

  let morseCode = morseCodeInput.value;

  const characters = convertMorseToEnglish(morseCode);
  translationParagraph.textContent = characters;

  //prevent
  if (characters.length === 0) return;
  const possibleWords = findWordsWithCharacters(characters, allWords);
  renderWordsTable(possibleWords, possibleWordsTable);
});

function convertMorseToEnglish(morseString: string) {
  const characters: string[] = [];

  morseString.split(" ").forEach((morseChar) => {
    const char = morseCodeAlphabet.find((char) => char.morseCode === morseChar);

    char && characters.push(char.letter);
  });
  console.log(characters);

  return characters.join("").toLowerCase();
}

function findWordsWithCharacters(
  characters: string | string[],
  wordsArray: string[]
) {
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

renderWordsTable([], possibleWordsTable);

// render list of words when user input is empty
// !morseCodeInput.value && renderWordsTable(allWords, possibleWordsTable);
