let addUserFormEl = document.getElementById("addUserForm");

let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");

let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");

function checkValidations() {
  if (nameEl.value === "") {
    nameErrMsgEl.textContent = "Required*";
  }
  if (emailEl.value === "") {
    emailErrMsgEl.textContent = "Required*";
  }
}

function validateName() {
  if (nameEl.value === "") {
    nameErrMsgEl.textContent = "Required*";
  } else {
    nameErrMsgEl.textContent = "";
  }
}

function validateEmail() {
  if (emailEl.value === "") {
    emailErrMsgEl.textContent = "Required*";
  } else {
    emailErrMsgEl.textContent = "";
  }
}

nameEl.addEventListener("blur", validateName);
emailEl.addEventListener("blur", validateEmail);

addUserFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  checkValidations();
});
