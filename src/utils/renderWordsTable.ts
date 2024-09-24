export function renderWordsTable(
  wordsArray: string[],
  tableElement: HTMLElement
) {
  tableElement.innerHTML = "";

  // Create the header row
  const headerRow = document.createElement("tr");
  const headerCell = document.createElement("th");
  headerCell.textContent = "Possible words:";
  headerRow.appendChild(headerCell);
  tableElement.appendChild(headerRow);

  // Create and append data rows for each word
  wordsArray.map((item) => {
    const dataRow = document.createElement("tr");
    const dataCell = document.createElement("td");
    dataCell.textContent = item;
    dataRow.appendChild(dataCell);
    tableElement.appendChild(dataRow);
  });
}
