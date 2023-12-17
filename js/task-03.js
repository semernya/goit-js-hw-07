// Обовязково очищай значення в інпуті по краях від пробілів .
//Якщо інпут порожній або містить лише пробіли, то замість імені у спан має
//підставлятися рядок "Anonymous".

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const inputContent = event.currentTarget.value.trim();

  if (inputContent === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = inputContent;
  }
});
