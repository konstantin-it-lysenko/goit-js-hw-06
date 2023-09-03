const spanEl = document.getElementById('value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = Number(spanEl.innerHTML);

decrementBtn.classList.add('decrement-btn');
incrementBtn.classList.add('increment-btn');

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function decrement() {
    counterValue -= 1;
    spanEl.textContent = counterValue;
}

function increment() {
    counterValue += 1;
    spanEl.textContent = counterValue;
}
