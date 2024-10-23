import { POSSIBLE_WORDS_DATA, SELECTED_LANGUAGE } from "../../main";
import { findWordsWithCharacters } from "../utils/helpers";
import { renderWordsFreqTable } from "../utils/renderWordsTable";
import { decodeMorse } from "./decodeMorse";

export const morseCodeInput = document.querySelector(
  "#morseCodeInput"
) as HTMLInputElement;
export const dotBtn = document.querySelector("#dotBtn") as HTMLButtonElement;
export const dashBtn = document.querySelector("#dashBtn") as HTMLButtonElement;
export const spaceBtn = document.querySelector(
  "#spaceBtn"
) as HTMLButtonElement;
export const bacspaceBtn = document.querySelector(
  "#bacspaceBtn"
) as HTMLButtonElement;

const translatedParagraph = document.querySelector(
  "#translatedMorse"
) as HTMLParagraphElement;

function sanitizeMorseCodeInput() {
  // Handle user input & update translation
  // Prevent invalid keys using keydown
  morseCodeInput?.addEventListener("keydown", (e) => {
    const allowedKeys: string[] = [
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
    if (e.ctrlKey || e.metaKey) return;

    if (!allowedKeys.includes(e.key.toString())) {
      e.preventDefault();
    }
  });
}

function handleMorseCodeInput() {
  sanitizeMorseCodeInput();

  morseCodeInput?.addEventListener("input", () => {
    // Replace multiple spaces with a single space
    if (morseCodeInput.value.slice(-2) === "  ")
      morseCodeInput.value = morseCodeInput.value.slice(0, -1);

    // Reset table when input is cleared
    if (morseCodeInput.value === "") {
      renderWordsFreqTable(POSSIBLE_WORDS_DATA);
      translatedParagraph.textContent = "_";
      return;
    }

    let morseCode = morseCodeInput.value;

    const characters = decodeMorse(morseCode, SELECTED_LANGUAGE);
    translatedParagraph.textContent = characters;

    // unknown characters
    if (characters.length === 0) {
      renderWordsFreqTable([]);
      translatedParagraph.textContent = "_";
      return;
    }
    const possibleWords = findWordsWithCharacters(
      characters,
      POSSIBLE_WORDS_DATA
    );
    renderWordsFreqTable(possibleWords);
  });
}

export { handleMorseCodeInput };
