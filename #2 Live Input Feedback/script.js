const emailInput = document.querySelector('#email');

emailInput.addEventListener('keyup', () => {
    validate(emailInput, emailRegex);
});

const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/;

const validate = (input, regex) => {
    const match = regex.test(input.value);
    const tick = emailInput.nextElementSibling;

    if (match) {
        emailInput.classList.add('valid');
        tick.classList.add('valid');
    } 

    if (!match) {
        emailInput.classList.remove('valid');
        tick.classList.remove('valid');
    }
}