const input = document.querySelector('#validation-input');
// const inputLength = document.querySelector('[data-length="6"]');

console.log(input);

const validationInput = () => {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}

input.addEventListener('blur', validationInput);