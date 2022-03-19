const updatePasswordFormEl = document.getElementById("updatePasswordForm");

const newPasswordEl = document.getElementById("newPassword");
const confirmPasswordEl = document.getElementById("confirmPassword");

const newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
const confirmPasswordErrMsgEl = document.getElementById(
  "confirmPasswordErrMsg"
);

let validation1 = function () {
  if (newPasswordEl.value === "") {
    newPasswordErrMsgEl.textContent = "Required*";
  } else {
    newPasswordErrMsgEl.textContent = "";
  }
};

let validation2 = function () {
  if (confirmPasswordEl.value !== newPasswordEl.value) {
    confirmPasswordErrMsgEl.textContent = "passwords must be same*";
  } else {
    confirmPasswordErrMsgEl.textContent = "";
  }
};

newPasswordEl.addEventListener("blur", validation1);
confirmPasswordEl.addEventListener("blur", validation2);

updatePasswordFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  validation2();
  validation1();
});
