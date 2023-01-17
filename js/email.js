const inputEmail = document.querySelector(".input_email");
const showErrEmail = document.querySelector(".show_err-email");

inputEmail.addEventListener("input", (e) => {
  const valueEmail = e.target.value;
  const regexEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  if (regexEmail.test(valueEmail.trim())) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
    showErrEmail.textContent = ``;
  } else {
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
    showErrEmail.textContent = `Email phải đúng định dạng. `;
  }
  if (!valueEmail) {
    e.target.classList.remove("invalid");
    showErrEmail.textContent = ``;
  }
});
