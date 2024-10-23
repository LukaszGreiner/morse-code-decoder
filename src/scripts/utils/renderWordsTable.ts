import { WordFrequency } from "../../data/wordsbank.js";
const wordsFreqTable = document.querySelector(
  "#wordsFreqTable"
) as HTMLTableElement;

function renderWordsFreqTable(dataArray: WordFrequency[]) {
  // console.log("Rendering ", dataArray);

  wordsFreqTable.innerHTML = "";

  dataArray.map((item) => {
    const dataRow = document.createElement("tr");
    const wordCell = document.createElement("td");
    const frequencyCell = document.createElement("td");

    wordCell.textContent = item.word;
    frequencyCell.textContent = item.frequency;

    dataRow.appendChild(wordCell);
    dataRow.appendChild(frequencyCell);
    wordsFreqTable.appendChild(dataRow);
  });
}

export { renderWordsFreqTable };
