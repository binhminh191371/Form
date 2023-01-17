const inputUserName = document.querySelector(".input_username");
const showErrUser = document.querySelector(".show_err-user");

// handle input username
inputUserName.addEventListener("input", (e) => {
    const valueUser = e.target.value;
    const regexUserName = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
  
    if (regexUserName.test(valueUser.trim())) {
      e.target.classList.add("valid");
      e.target.classList.remove("invalid");
      showErrUser.textContent = ``;
    } else {
      e.target.classList.remove("valid");
      e.target.classList.add("invalid");
      showErrUser.textContent = `Username phải ít nhất 8 kí tự bao gồm số và chữ hoa chữ thường.`;
    }
    if (!valueUser) {
      e.target.classList.remove("invalid");
      showErrUser.textContent = ``;
    }
  });
