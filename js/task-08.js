const form = document.querySelector("form.login-form");

const onSubmit = (event) => {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value &&
    event.currentTarget.elements.password.value !== ""
  ) {
    // const email = event.currentTarget.elements.email.value;
    // const password = event.currentTarget.elements.password.value;

    // const objData = { email, password };
    // console.log(objData);

    const formData = new FormData(event.currentTarget);
    console.log(formData);

    formData.forEach((a, b) => {
      console.log(b, a);
    });
  } else {
    alert("Bсе поля должны быть заполнены!");
  }
  event.currentTarget.reset();
};

form.addEventListener("submit", onSubmit);
