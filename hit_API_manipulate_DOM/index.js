const userInputEl = document.getElementById("userInput");
const factEl = document.getElementById("fact");
const spinnerEl = document.getElementById("spinner");

function onKeyDownEvent(event) {
  if (event.key === "Enter") {
    if (event.target.value === "") {
      alert("Please Enter a Number");
    } else {
      spinnerEl.classList.remove("d-none");
      let url =
        "https://apis.ccbp.in/numbers-fact?number=" + event.target.value;
      let reqConfig = {
        method: "GET"
      };
      fetch(url, reqConfig)
        .then(function (res) {
          return res.json();
        })
        .then(function (jsonData) {
          spinnerEl.classList.add("d-none");
          factEl.textContent = jsonData.fact;
        });
    }
  }
}

userInputEl.addEventListener("keydown", onKeyDownEvent);
