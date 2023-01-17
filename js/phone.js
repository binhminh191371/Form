const inputPhone = document.querySelector(".input_phone");
const showErrPhone = document.querySelector(".show_err-phone");

inputPhone.addEventListener("input", (e) => {
    const valuePhone = e.target.value;
    const regexPhone =
      /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
  
    if (regexPhone.test(valuePhone.trim())) {
      e.target.classList.add("valid");
      e.target.classList.remove("invalid");
      showErrPhone.textContent = ``;
    } else {
      e.target.classList.remove("valid");
      e.target.classList.add("invalid");
      showErrPhone.textContent = `Phone phải đúng định dạng. `;
    }
    if (!valuePhone) {
      e.target.classList.remove("invalid");
      showErrPhone.textContent = ``;
    }
  });
  