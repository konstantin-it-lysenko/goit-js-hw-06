const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');

inputEl.addEventListener('input', inputCheck);

function inputCheck(event) {
    spanEl.textContent = event.currentTarget.value;

    if (event.currentTarget.value === '') {
        spanEl.textContent = 'Anonymous';
    }
}
