const inputPwSignUp = document.querySelector(".input_password");
const showPWSignUp = document.querySelector(".show_err-pw");
const inputUserName = document.querySelector(".input_username");
const showErrUser = document.querySelector(".show_err-user");
const btnSignup = document.querySelector(".btn_signup");
const inputPw = document.querySelector(".input_password");
const showErrPw = document.querySelector(".show_err-pw");
const inputConfirmPw = document.querySelector(".input_confirmpassword");
const showErrCpw = document.querySelector(".show_err-confirmpw");
const inputEmail = document.querySelector(".input_email");
const showErrEmail = document.querySelector(".show_err-email");
const inputPhone = document.querySelector(".input_phone");
const showErrPhone = document.querySelector(".show_err-phone");
const btnInput = document.querySelectorAll("input");
console.log(btnInput);

function checkSignUp() {
  // handle username
  let checkValid = false;
  const valueUser = inputUserName.value;
  const regexUserName =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^!@#\$%\^&\*]).{8,}$/;

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

  // handle password
  const valuePWSignUp = inputPwSignUp.value;
  const regexPWSignUp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;

  if (regexPWSignUp.test(valuePWSignUp.trim())) {
    inputPwSignUp.classList.add("valid");
    inputPwSignUp.classList.remove("invalid");
    showPWSignUp.textContent = ``;
  } else {
    inputPwSignUp.classList.remove("valid");
    inputPwSignUp.classList.add("invalid");
    showPWSignUp.textContent = `Password phải ít nhất 8 kí tự bao gồm số chữ hoa chữ thường và kí tự đặc biệt`;
  }
  if (!valuePWSignUp) {
    inputPwSignUp.classList.remove("invalid");
    showPWSignUp.textContent = ``;
  }

  // handle phone
  const valuePhone = inputPhone.value;
  const regexPhone =
    /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;

  if (regexPhone.test(valuePhone.trim())) {
    inputPhone.classList.add("valid");
    inputPhone.classList.remove("invalid");
    showErrPhone.textContent = ``;
  } else {
    inputPhone.classList.remove("valid");
    inputPhone.classList.add("invalid");
    showErrPhone.textContent = `Phone phải đúng định dạng. `;
  }
  if (!valuePhone) {
    inputPhone.classList.remove("invalid");
    showErrPhone.textContent = ``;
  }

  // handle email
  const valueEmail = inputEmail.value;
  const regexEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  if (regexEmail.test(valueEmail.trim())) {
    inputEmail.classList.add("valid");
    inputEmail.classList.remove("invalid");
    showErrEmail.textContent = ``;
  } else {
    inputEmail.classList.remove("valid");
    inputEmail.classList.add("invalid");
    showErrEmail.textContent = `Email phải đúng định dạng. `;
  }
  if (!valueEmail) {
    inputEmail.classList.remove("invalid");
    showErrEmail.textContent = ``;
  }

  // handle confirm password
  function checkPassWord() {
    if (inputPw.value == inputConfirmPw.value) {
      inputConfirmPw.classList.remove("valid");
      inputConfirmPw.classList.add("invalid");
      showErrCpw.textContent = ``;
    } else {
      inputConfirmPw.classList.add("valid");
      inputConfirmPw.classList.remove("invalid");
      showErrCpw.textContent = `Password không khớp.`;
    }
    if (!inputConfirmPw.value) {
      inputConfirmPw.classList.remove("invalid");
      inputConfirmPw.classList.remove("valid");
      showErrCpw.textContent = ``;
    }
  }

  function validatePassword() {
    const valuePw = inputPw.value;
    const regexPw =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;
    if (regexPw.test(valuePw.trim())) {
      inputPw.classList.add("valid");
      inputPw.classList.remove("invalid");
      showErrPw.textContent = ``;
    } else {
      inputPw.classList.remove("valid");
      inputPw.classList.add("invalid");
      showErrPw.textContent = `Password phải ít nhất 8 kí tự bao gồm số,chữ hoa chữ thường và kí tự đặc biệt.`;
    }
    if (!valuePw) {
      inputPw.classList.remove("invalid");
      showErrPw.textContent = ``;
    }
  }
  inputPw.addEventListener("keyup", () => validatePassword());

  inputConfirmPw.addEventListener("keyup", () => checkPassWord());
  const handleInvalid = () => {
    btnInput.forEach((element) => {
      if (element.classList.contains("invalid")) {
        checkValid = true;
        return;
      }
    });
  };
  handleInvalid();
  if (
    inputPwSignUp.value &&
    valueUser &&
    valueEmail &&
    valuePhone &&
    inputConfirmPw.value == inputPw.value  &&
    !checkValid
  ) {
    btnSignup.classList.add("active");
  } else {
    btnSignup.classList.remove("active");
  }
}

inputUserName.addEventListener("input", checkSignUp);
inputPwSignUp.addEventListener("input", checkSignUp);
inputPhone.addEventListener("input", checkSignUp);
inputEmail.addEventListener("input", checkSignUp);
inputConfirmPw.addEventListener("input", checkSignUp);
