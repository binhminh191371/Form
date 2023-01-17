const inputPw = document.querySelector(".input_password");
const showErrPw = document.querySelector(".show_err-pw");
const inputConfirmPw = document.querySelector(".input_confirmpassword");
const showErrCpw = document.querySelector(".show_err-confirmpw");

function checkPassWord() {
    if(inputPw.value == inputConfirmPw.value){
      inputConfirmPw.classList.remove("valid");
      inputConfirmPw.classList.add("invalid");
      showErrCpw.textContent = ``;
    }else{
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
  const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;
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
