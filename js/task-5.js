'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonClick = document.querySelector("button.change-color");
const spanColor = document.querySelector(".color");

buttonClick.addEventListener("click", function () {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
});



