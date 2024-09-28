import { morseCodeAlphabet } from "../data/data.js";
// Helper functions
export function convertMorseToEnglish(morseString) {
    const characters = [];
    morseString.split(" ").forEach((morseChar) => {
        const char = morseCodeAlphabet.find((item) => item.morseCode === morseChar);
        char && characters.push(char.letter);
    });
    return characters.join("").toLowerCase();
}
