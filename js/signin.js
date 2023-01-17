const inputPwLogin = document.querySelector(".input_pwlogin");
const showPWLogin = document.querySelector(".show_err-pwlogin");
const inputUserName = document.querySelector(".input_username");
const showErrUser = document.querySelector(".show_err-user");
const btnLogin = document.querySelector(".btn_signin");
const btnInput = document.querySelectorAll("input");

function checkSignIn() {
  const valueUser = inputUserName.value;
  const regexUserName =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^!@#\$%\^&\*]).{8,}$/;
  let checkValid = false;
  if (regexUserName.test(valueUser.trim())) {
    inputUserName.classList.add("valid");
    inputUserName.classList.remove("invalid");
    showErrUser.textContent = ``;
  } else {
    inputUserName.classList.remove("valid");
    inputUserName.classList.add("invalid");
    showErrUser.textContent = `Username phải ít nhất 8 kí tự bao gồm số, chữ hoa, chữ thường và không chứa kí tự đặc biệt.`;
  }
  if (!valueUser) {
    inputUserName.classList.remove("invalid");
    showErrUser.textContent = ``;
  }

  const valuePWLogin = inputPwLogin.value;
  const regexPWLogin =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;

  if (regexPWLogin.test(valuePWLogin.trim())) {
    inputPwLogin.classList.add("valid");
    inputPwLogin.classList.remove("invalid");
    showPWLogin.textContent = ``;
  } else {
    inputPwLogin.classList.remove("valid");
    inputPwLogin.classList.add("invalid");
    showPWLogin.textContent = `Password phải ít nhất 8 kí tự bao gồm số chữ hoa chữ thường và kí tự đặc biệt`;
  }
  if (!valuePWLogin) {
    inputPwLogin.classList.remove("invalid");
    showPWLogin.textContent = ``;
  }

  const handleInvalid = () => {
    btnInput.forEach((element) => {
      if (element.classList.contains("invalid")) {
        checkValid = true;
        return;
      }
    });
  };
  handleInvalid();

  if (valueUser && valuePWLogin && !checkValid) {
    btnLogin.classList.add("active");
  } else {
    btnLogin.classList.remove("active");
  }
}

inputUserName.addEventListener("input", checkSignIn);

inputPwLogin.addEventListener("input", checkSignIn);
