import { keepTalkingWordsData, WordFrequency } from "../data/data";

const array: { word: string; frequency: string }[] = [
  { word: "shell", frequency: "3.505 MHz" },
];

export function renderWordsTable(
  dataArray: WordFrequency[],
  tableElement: HTMLElement
) {
  tableElement.innerHTML = "";

  dataArray.map((item) => {
    const dataRow = document.createElement("tr");
    const wordCell = document.createElement("td");
    const frequencyCell = document.createElement("td");

    wordCell.textContent = item.word;
    frequencyCell.textContent = item.frequency;

    dataRow.appendChild(wordCell);
    dataRow.appendChild(frequencyCell);
    tableElement.appendChild(dataRow);
  });
}
