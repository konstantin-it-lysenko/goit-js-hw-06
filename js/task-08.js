const formEl = document.querySelector('.login-form');
const emailInp = document.querySelector('input[name="email"]');
const passInp = document.querySelector('input[name="password"]');
const submitBtn = document.querySelector('button[type="submit"]');

submitBtn.classList.add('form-submit-btn');

formEl.addEventListener('submit', formSubmitHadler)

function formSubmitHadler(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (!password || !email) return alert('All the fields should be filled!')
    //! 1
    const formDataObj = {
        email,
        password,
    }

    //! 2
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        const formDataCheck = {};

        formDataCheck[name] = value;
        console.log('Data inside FORM DATA CLASS', formDataCheck);
    })

    console.log('Object form data', formDataObj);
    console.log('Class Form Data', formData);

    formEl.reset();
}

