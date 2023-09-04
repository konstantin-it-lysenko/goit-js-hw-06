const inputEl = document.getElementById('validation-input');
const MAX_LENGTH = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', inputValidation);

function inputValidation() {
    if (inputEl.value.length === MAX_LENGTH) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}
