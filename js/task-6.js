'use strict';

const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy");


input.addEventListener("input", (event) => {
  const amount = event.currentTarget.value;
 
  btnCreate.addEventListener("click", createBoxes(amount) {
if (amount >= 1 && amount <= 100) {
      boxes.innerHTML = `div*${amount}`;
       input.textContent = "";
    }
  });
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  boxes.innerHTML = "";  
}