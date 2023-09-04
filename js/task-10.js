const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.getElementById('boxes');
let amount = 0;

input.addEventListener('input', targetInputClickHandler);
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destoyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function targetInputClickHandler(event) {
  amount = Number(event.currentTarget.value);
}

function createBoxes() {
  if (amount < 0 || amount > 100) return console.error('Error. Please enter number from 1 to 100');
  let size = 20;
  for (let i = 0; i < amount; i += 1) {
    boxes.insertAdjacentHTML('beforeend', `<li class="box" style="background-color: ${getRandomHexColor()}; width: ${size + i * 2}px; height: ${size + i * 2}px; border-radius: 50%; margin: 2px"></li>`)
  }
}

function destoyBoxes() {
  amount = 0;
  boxes.innerHTML = '';

  targetInputCleaner(input);
}

function targetInputCleaner(inp) {
  inp.value = '';
}
