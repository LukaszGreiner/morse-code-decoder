import "./scss/style.scss";

import { handleMorseCodeInput } from "./scripts/components/morseCodeInput.js";
import { handleMorseButtons } from "./scripts/components/controls.js";
import { handleLanguageMenu } from "./scripts/components/langMenu.js";
import { handleMobileMenu } from "./scripts/components/mobileMenu.js";
import { keepTalkingWordsData } from "./data/wordsbank.js";
import { renderWordsFreqTable } from "./scripts/utils/renderWordsTable.js";
import { renderLangSelectList } from "./scripts/components/langSelectList.js";

// GLOBAL VARIABLES
export let POSSIBLE_WORDS_DATA = keepTalkingWordsData["english"];
export let SELECTED_LANGUAGE = "english";

// language setter function
export function setLanguage(languageName: string) {
  SELECTED_LANGUAGE = languageName;
  POSSIBLE_WORDS_DATA = keepTalkingWordsData[languageName];
}

function initApp() {
  handleMobileMenu();
  handleLanguageMenu();
  handleMorseButtons();
  handleMorseCodeInput();
  renderWordsFreqTable(POSSIBLE_WORDS_DATA);
  renderLangSelectList();
}

initApp();
