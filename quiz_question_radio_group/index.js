let questionsFormEl = document.getElementById("questionsForm");

let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let cityMumbaiEl = document.getElementById("cityMumbai");

let resultMsgEl = document.getElementById("resultMsg");
let answer;

cityHyderabadEl.addEventListener("change", function (event) {
  answer = event.target.value;
});
cityChennaiEl.addEventListener("change", function (event) {
  answer = event.target.value;
});
cityDelhiEl.addEventListener("change", function (event) {
  answer = event.target.value;
});
cityMumbaiEl.addEventListener("change", function (event) {
  answer = event.target.value;
});

function validateTheAnswer() {
  console.log(answer);
  if (answer === "Delhi") {
    resultMsgEl.textContent = "Correct Answer";
    resultMsgEl.classList.add("success-style");
    resultMsgEl.classList.remove("failure-style");
  } else if (answer === undefined) {
    resultMsgEl.textContent = "Please select Answer";
    resultMsgEl.classList.add("failure-style");
    resultMsgEl.classList.remove("success-style");
  } else {
    resultMsgEl.textContent = "Wrong Answer";
    resultMsgEl.classList.remove("success-style");
    resultMsgEl.classList.add("failure-style");
  }
}

questionsFormEl.addEventListener("submit", function (eve) {
  eve.preventDefault();
  validateTheAnswer();
});
