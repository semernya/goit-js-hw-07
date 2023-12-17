const form = document.querySelector(".login-form");

const sendFormInfo = (event) => {
  event.preventDefault();

  const elCollection = event.target.elements;

  if (elCollection.email.value === "" || elCollection.password.value === "") {
    alert("All form fields must be filled in!");
  } else {
    const formInfo = {
      email: elCollection.email.value,
      password: elCollection.password.value,
    };
    console.log(formInfo);
  }

  form.reset();
};

form.addEventListener("submit", sendFormInfo);
