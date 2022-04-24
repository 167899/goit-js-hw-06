function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onClickColorButton = (event) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorNameText.textContent = color;
};

const changeColorButton = document.querySelector("button.change-color");
const body = document.querySelector("body");
const colorNameText = document.querySelector("span.color");

changeColorButton.addEventListener("click", onClickColorButton);
