import { WordFrequency } from "../data/data";

export function findWordsWithCharacters(
  characters: string | string[],
  wordAndFreqArray: WordFrequency[]
): WordFrequency[] {
  const characterSet = new Set(characters);

  const matchingWords: WordFrequency[] = [];

  // Iterate through words and frequencies, maintaining type safety
  for (const { word, frequency } of wordAndFreqArray) {
    const wordSet = new Set(word.split(""));

    if (Array.from(characterSet).every((char) => wordSet.has(char))) {
      matchingWords.push({ word, frequency });
    }
  }

  return matchingWords;
}
