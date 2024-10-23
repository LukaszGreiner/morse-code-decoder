import { toggleHidden } from "../utils/helpers.js";

const headerLangMenuBtn = document.querySelector("#headerLangMenuBtn");
const langMenu = document.querySelector(".language-menu") as HTMLDivElement;
const langMenuCloseBtn = document.querySelector("#langMenuCloseBtn");

function handleLanguageMenu() {
  // Opening language menu on other platforms
  headerLangMenuBtn?.addEventListener("click", () => {
    toggleHidden(langMenu);
  });

  // Closing language menu
  langMenuCloseBtn?.addEventListener("click", () => {
    toggleHidden(langMenu);
  });
}

export { handleLanguageMenu, langMenu };
