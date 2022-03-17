let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

sendGetRequestBtnEl.addEventListener("click", getTheData);

function displayResponseStatus(status) {
  loadingEl.classList.toggle("d-none");
  requestStatusEl.classList.toggle("d-none");
  requestStatusEl.textContent = status;
}

function displayResponseBody(bodyData) {
  httpResponseEl.textContent = bodyData;
}

function getTheData() {
  loadingEl.classList.toggle("d-none");
  requestStatusEl.classList.toggle("d-none");
  let options = {
    method: "GET"
  };
  const url = "https://gorest.co.in/public-api/users";
  fetch(url, options)
    .then(function (response) {
      displayResponseStatus(response.status);
      return response.text();
    })
    .then(function (body) {
      displayResponseBody(body);
    });
}
