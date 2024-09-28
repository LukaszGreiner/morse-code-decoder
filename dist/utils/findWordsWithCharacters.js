export function findWordsWithCharacters(characters, wordAndFreqArray) {
    const characterSet = new Set(characters);
    const matchingWords = [];
    // Iterate through words and frequencies, maintaining type safety
    for (const { word, frequency } of wordAndFreqArray) {
        const wordSet = new Set(word.split(""));
        if (Array.from(characterSet).every((char) => wordSet.has(char))) {
            matchingWords.push({ word, frequency });
        }
    }
    return matchingWords;
}
