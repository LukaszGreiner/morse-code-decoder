export function findWordsWithCharacters(characters, wordsArray) {
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
