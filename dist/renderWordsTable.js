export function renderWordsTable(wordsArray, table) {
    table.innerHTML = "";
    // Create the header row
    const headerRow = document.createElement("tr");
    const headerCell = document.createElement("th");
    headerCell.textContent = "Possible words:";
    headerRow.appendChild(headerCell);
    table.appendChild(headerRow);
    // Create and append data rows for each word
    wordsArray.map((item) => {
        const dataRow = document.createElement("tr");
        const dataCell = document.createElement("td");
        dataCell.textContent = item;
        dataRow.appendChild(dataCell);
        table.appendChild(dataRow);
    });
}
