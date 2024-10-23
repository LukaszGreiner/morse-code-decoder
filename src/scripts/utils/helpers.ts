import { WordFrequency } from "../../data/wordsbank";

function toggleHidden(element: HTMLElement) {
  element?.classList.toggle("hidden");
}

// aligns 2nd element based on position of the 1st element
function alignElement(
  anchorElement: HTMLElement,
  elementToAlign: HTMLElement,
  offsetX: number = 0,
  offsetY: number = 0
): void {
  window.onresize = align;

  function align() {
    if (window.innerWidth < 640) {
      // removing js align after resizing to mobile
      elementToAlign.removeAttribute("style");
      return;
    }

    const rect1 = anchorElement.getBoundingClientRect();
    const rect2 = elementToAlign.getBoundingClientRect();

    // Set the position of the language menu to align its top right corner with the langBtn
    elementToAlign.style.cssText = `
    left: ${rect1.left + rect1.width / 2 - rect2.width + offsetX}px; 
    top: ${rect1.top + rect1.height / 2 + offsetY}px;
`;
  }
  align();
}

function findWordsWithCharacters(
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

export { toggleHidden, alignElement, findWordsWithCharacters };
