"use strict";
const dashBtn = document.querySelector(".dsh-btn");
const dotBtb = document.querySelector(".dot-btn");
const spaceBtn = document.querySelector(".space-btn");
const bacspaceBtn = document.querySelector(".bacspace-btn");
const larrBtn = document.querySelector(".larr-btn");
const rarrBtn = document.querySelector(".rarr-btn");
const input = document.querySelector("#morseCodeInput");
dashBtn.addEventListener("click", () => {
    input.value += "-";
});
