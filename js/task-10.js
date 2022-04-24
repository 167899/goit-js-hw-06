function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  let boxes = [];
  let wdt = 0;
  let hgt = 0;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");

    if (i === 0) {
      wdt = 30;
      hgt = 30;
    } else {
      wdt += 10;
      hgt += 10;
    }

    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${wdt}px`;
    div.style.height = `${hgt}px`;

    boxes.push(div);
  }
  divBoxes.innerHTML = "";
  divBoxes.append(...boxes);
  return divBoxes;
};

const destroyBoxes = () => {
  divInput.value = 1;
  return (divBoxes.innerHTML = "");
};

const divBoxes = document.querySelector("div#boxes");
const divInput = document.querySelector("#controls input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");

buttonCreate.addEventListener("click", () => createBoxes(divInput.value));
buttonDestroy.addEventListener("click", () => destroyBoxes());
