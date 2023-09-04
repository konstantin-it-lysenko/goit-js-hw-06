const colorChangeBtn = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

colorChangeBtn.addEventListener('click', changeColorButtonHandler)

function changeColorButtonHandler() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}
