const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.getElementById('boxes');
let amount = 0;

input.addEventListener('input', inputListener);
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destoyBoxes);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function inputListener(event) {
  amount = Number(event.currentTarget.value);
  console.log('amount', amount);
}

function createBoxes() {
  boxes.innerHTML = '';
  if (amount < 0 || amount > 100) return console.error('Error. Please enter number from 1 to 100');
  for (let i = 0; i < amount; i += 1) {
    boxes.insertAdjacentHTML('beforeend', `<li class="box" style="background-color: ${getRandomHexColor()}"></li>`)
  }
}

function destoyBoxes() {
  boxes.innerHTML = '';
}
