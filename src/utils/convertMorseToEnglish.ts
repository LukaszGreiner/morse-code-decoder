import { morseCodeAlphabet, LetterMorseCode } from "../data/data.js";

// Helper functions
export function convertMorseToEnglish(morseString: string) {
  const characters: string[] = [];

  morseString.split(" ").forEach((morseChar) => {
    const char = morseCodeAlphabet.find(
      (item: LetterMorseCode) => item.morseCode === morseChar
    );

    char && characters.push(char.letter);
  });

  return characters.join("").toLowerCase();
}
