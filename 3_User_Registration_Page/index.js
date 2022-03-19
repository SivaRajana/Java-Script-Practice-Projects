let addUserFormEl = document.getElementById("addUserForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");

let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let statusEl = document.getElementById("status");

let maleRadioEl = document.getElementById("genderMale");
let femaleRadioEl = document.getElementById("genderFemale");

let formData = {
  name: "",
  email: "",
  status: "active",
  gender: "male"
};

function validateEmail() {
  if (formData.email === "") {
    emailErrMsgEl.textContent = "Required*";
  } else {
    emailErrMsgEl.textContent = "";
  }
}

function validateUserName() {
  if (formData.name === "") {
    nameErrMsgEl.textContent = "Required*";
  } else {
    nameErrMsgEl.textContent = "";
  }
}

function postDataToAPI(userData) {
  let url = "https://gorest.co.in/public-api/users";
  let reqConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 88d29346e4fa944ddf74ace89b4affef650c475bee496f6c7c04ee2e352695c0"
    },
    body: JSON.stringify(userData)
  };
  // console.log(reqConfig.body);
  fetch(url, reqConfig)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      console.log(jsonData);
      if (
        jsonData.code === 422 &&
        jsonData.data[0].message === "has already been taken"
      ) {
        emailErrMsgEl.textContent = "Email has already taken";
      }
    });
}

nameEl.addEventListener("change", function (event) {
  validateUserName();
  formData.name = event.target.value;
});
emailEl.addEventListener("change", function (event) {
  validateEmail();
  formData.email = event.target.value;
});

nameEl.addEventListener("blur", validateUserName);
emailEl.addEventListener("blur", validateEmail);

statusEl.addEventListener("change", function (event) {
  formData.status = event.target.value;
});

maleRadioEl.addEventListener("change", function (x) {
  formData.gender = x.target.value;
});
femaleRadioEl.addEventListener("change", function (x) {
  formData.gender = x.target.value;
});

addUserFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  validateUserName();
  validateEmail();
  // console.log(formData);
  postDataToAPI(formData);
  // console.log("END");
});
