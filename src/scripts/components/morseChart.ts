const morseCodeChart = document.querySelector("#morseCodeChart");

function renderMorseChart(languageName: string) {
  const morseCodeSrc = `./img/morseCharts/morse-signals-${languageName}.svg`;

  morseCodeChart?.setAttribute("src", morseCodeSrc);
}

export { renderMorseChart };
