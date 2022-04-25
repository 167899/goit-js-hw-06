const fsControl = document.querySelector("#font-size-control");
const textContent = document.querySelector("#text");
textContent.style.fontSize = `${fsControl.value}px`;

const nodeValue = () => {
  textContent.style.fontSize = `${fsControl.value}px`;
  console.log(textContent.style.fontSize);
};

fsControl.addEventListener("input", nodeValue);
