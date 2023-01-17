const inputPwLogin = document.querySelector(".input_pwlogin")
const showPWLogin = document.querySelector(".show_err-pwlogin")

inputPwLogin.addEventListener("input", (e) => {
    const valuePWLogin = e.target.value;
    const regexPWLogin= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;
  
    if (regexPWLogin.test(valuePWLogin.trim())) {
      e.target.classList.add("valid");
      e.target.classList.remove("invalid");
      showPWLogin.textContent = ``;
    } else {
      e.target.classList.remove("valid");
      e.target.classList.add("invalid");
      showPWLogin.textContent = `Password phải ít nhất 8 kí tự bao gồm số chữ hoa chữ thường và kí tự đặc biệt`;
    }
    if (!valuePWLogin) {
      e.target.classList.remove("invalid");
      showPWLogin.textContent = ``;
    }
  });
