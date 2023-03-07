function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const markerButton = document.querySelector(`button.change-color`);
const markerSpan = document.querySelector(`span.color`);
const window = document.body;

const fnChangeColor = () => {
const color = getRandomHexColor();
window.style.background = color;
markerSpan.textContent = color;
}

markerButton.addEventListener("click", fnChangeColor);
