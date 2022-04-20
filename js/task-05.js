const userName = document.querySelector("#name-output");
userName.textContent = 'Anonymous';

const nameInput = document.querySelector("#name-input");

const inputUserName = () => {
  if (nameInput.value.length != 0) {
    return userName.textContent = nameInput.value;
  } else {
    return userName.textContent = 'Anonymous';
  }
}

nameInput.addEventListener('input', inputUserName)