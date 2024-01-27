'use strict';

const input = document.querySelector("input");
const boxesCollection = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy");



btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
  
function createBoxes() {
  const amount = input.value.trim();
  const boxes = [];

  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement("div");
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
      input.value = "";
    }
    boxesCollection.append(...boxes);
  } else {
    return alert(`Number should be from 1 to 100`);
  }
}
  
  function destroyBoxes() {
    boxesCollection.innerHTML = "";
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }


  




