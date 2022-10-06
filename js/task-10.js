function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreate = document.querySelector("button[data-create]");

const buttonDestroy = document.querySelector("button[data-destroy]");

const divBoxes = document.getElementById("boxes");

const input = document.querySelector("input");

let amount = 0;

input.addEventListener("input", () => {
  amount = input.value;
});

buttonCreate.addEventListener("click", createBoxes);

buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {

  for (let i = 0; i < amount; i++) {

    if (amount === 0) {
      return;
    }
    let a = 0;
    let pixels = 0
    pixels = 30 + (i * 10);
    a = document.createElement("div");
    divBoxes.append(a);
    a.style.backgroundColor = getRandomHexColor();

    a.style.width = `${pixels}px`;
    a.style.height = `${pixels}px`;
  }
}

function destroyBoxes() {
  divBoxes.textContent = "";
}
