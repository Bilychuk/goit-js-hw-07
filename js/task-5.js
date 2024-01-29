'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorChangeButton = document.querySelector("button.change-color");
const colorDisplaySpan = document.querySelector(".color");

colorChangeButton.addEventListener("click", function () {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorDisplaySpan.textContent = newColor;
});



