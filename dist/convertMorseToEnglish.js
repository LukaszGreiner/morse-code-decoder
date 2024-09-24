import { morseCodeAlphabet } from "./data/data";
export function convertMorseToEnglish(morseString) {
    const characters = [];
    morseString.split(" ").forEach((morseChar) => {
        const char = morseCodeAlphabet.find((char) => char.morseCode === morseChar);
        char && characters.push(char.letter);
    });
    console.log(characters);
    return characters.join("").toLowerCase();
}
