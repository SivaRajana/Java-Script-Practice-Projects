const sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
const requestBodyEl = document.getElementById("requestBody");
const requestStatusEl = document.getElementById("requestStatus");
const httpResponseEl = document.getElementById("httpResponse");
const loadingEl = document.getElementById("loading");

function hitApi() {
  let dataToSend = requestBodyEl.value;
  loadingEl.classList.remove("d-none");
  requestStatusEl.classList.add("d-none");
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 88d29346e4fa944ddf74ace89b4affef650c475bee496f6c7c04ee2e352695c0"
    },
    body: dataToSend
  };
  fetch("https://gorest.co.in/public-api/users", options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      loadingEl.classList.add("d-none");
      requestStatusEl.classList.remove("d-none");
      requestStatusEl.textContent = data.code;
      httpResponseEl.textContent = JSON.stringify(data.data);
      console.log(data);
    });
}

sendPostRequestBtnEl.addEventListener("click", hitApi);
