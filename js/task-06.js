const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    const boxArr = [];
    let size = 30;
    for (let i = 0; i < amount; i++) {
      size += 10;
      const color = getRandomHexColor();
      const box = `<div style=" height:${size}px; width:${size}px; background-color:${color}; "></div>`;
      boxArr.push(box);
    }
    boxContainer.innerHTML = boxArr.join("");
    console.log(boxContainer);
  }
}

function destroyBoxes() {
  boxContainer.innerHTML = "";
}

const createBoxesOnClick = () => {
  let amount = 0;
  amount = input.value;
  createBoxes(amount);
  input.value = "";
};

const destroyBoxesOnClick = () => {
  destroyBoxes();
};

createBtn.addEventListener("click", createBoxesOnClick);
destroyBtn.addEventListener("click", destroyBoxesOnClick);
