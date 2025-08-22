const submit = document.querySelector("#submit");
const pass1 = document.querySelector("#password1");
const pass2 = document.querySelector("#password2");

let error = false;

submit.addEventListener("click", (e) => {
  console.log(pass1.value !== pass2.value);
  if (pass1.value !== pass2.value && !error) {
    const parent = submit.parentElement;
    const errElement = document.createElement("div");
    const errText = document.createElement("p");
    errText.textContent = "Your password doesn't match! Please, inform the exact same password on either one of the required fields.";

    errElement.appendChild(errText);
    errElement.className = "error";


    parent.insertBefore(errElement, submit);
    error = true;
  };
});