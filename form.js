const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentsInput = document.getElementById('comments');
const errorMsg = document.getElementById('error_msg');
const infoMsg = document.getElementById('info_msg');

function validateName() {
    const validityState = nameInput.validity;

    if (validityState.valueMissing || validityState.rangeUnderflow) {
        nameInput.setCustomValidity("Please enter your name.");
    }
    else {
        nameInput.setCustomValidity('');
    }

    return nameInput.checkValidity();
}

nameInput.addEventListener('blur', () => validateName());

nameInput.addEventListener('input', (e) => {
    nameInput.setCustomValidity('');
});

nameInput.addEventListener('invalid', (e) => {
    errorMsg.appendChild(document.createElement('p')).textContent = 'Name: Please enter your name.';
});