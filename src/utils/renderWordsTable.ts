import { allWords } from "../data/data";

export function renderWordsTable(
  wordsArray: string[],
  tableElement: HTMLElement
) {
  tableElement.innerHTML = "";

  wordsArray.map((item) => {
    const dataRow = document.createElement("tr");
    const dataCell = document.createElement("td");
    dataCell.textContent = item;
    dataRow.appendChild(dataCell);
    tableElement.appendChild(dataRow);
  });
}
