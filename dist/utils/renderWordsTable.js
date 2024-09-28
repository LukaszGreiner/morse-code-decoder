const array = [
    { word: "shell", frequency: "3.505 MHz" },
];
export function renderWordsTable(dataArray, tableElement) {
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
