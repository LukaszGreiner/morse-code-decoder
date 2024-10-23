import { morseCodeAlphabets } from "../../data/morseCodeAlphabets";

function decodeMorse(morseString: string, selectedLanguage: string) {
  const characters: string[] = [];
  const selectedMorseCodeAlphabet =
    morseCodeAlphabets[selectedLanguage] || morseCodeAlphabets["english"];

  // console.log(morseCodeAlphabets, selectedLanguage, selectedMorseCodeAlphabet);

  morseString.split(" ").forEach((morseChar) => {
    const char = selectedMorseCodeAlphabet.find(
      (char) => char.morseCode === morseChar
    );

    char && characters.push(char.letter);
  });

  return characters.join("").toLowerCase();
}

export { decodeMorse };
