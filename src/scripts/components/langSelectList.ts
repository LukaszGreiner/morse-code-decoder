import { setLanguage, POSSIBLE_WORDS_DATA } from "../../main";
import { keepTalkingWordsData } from "../../data/wordsbank";
import { toggleHidden } from "../utils/helpers";
import { renderWordsFreqTable } from "../utils/renderWordsTable";
import { renderMorseChart } from "./morseChart";
import { morseCodeInput } from "./morseCodeInput";

const langSelectList = document.querySelector(
  ".language-menu__list"
) as HTMLUListElement;
const langMenu = document.querySelector(".language-menu") as HTMLDivElement;

const renderLangSelectList = function () {
  const langOptions: string[] = Object.keys(keepTalkingWordsData);

  // console.log("Lang options: ", langOptions);

  langOptions.forEach((langName: string) => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");

    input.type = "radio";
    input.name = "langOption";
    input.value = langName;

    label.appendChild(document.createTextNode(langName));
    li.appendChild(label);
    li.appendChild(input);

    input?.addEventListener("click", (e: Event) => {
      const input = e.target as HTMLInputElement;
      const selectedLang = input.value;
      selectLang(selectedLang);
    });

    langSelectList.appendChild(li);
  });
};

function selectLang(languageName: string) {
  setLanguage(languageName);
  // render table
  renderWordsFreqTable(POSSIBLE_WORDS_DATA);

  // Update chart
  renderMorseChart(languageName);

  // update translation paragraph
  morseCodeInput.dispatchEvent(new Event("input"));

  // Hide modal
  toggleHidden(langMenu);
}

export { renderLangSelectList };
