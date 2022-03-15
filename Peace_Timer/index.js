let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");
let timerTextEl = document.getElementById("timerText");

let listOfId = [];

function countDownTimer(count) {
  if (listOfId.length > 0) {
    for (let id of listOfId) {
      clearInterval(id);
    }
  }
  timerTextEl.textContent = count + " seconds left";
  let intervalId = setInterval(function () {
    if (count === 0) {
      timerTextEl.textContent = "Your moment is complete";
      clearInterval(intervalId);
    } else {
      count = count - 1;
      timerTextEl.textContent = count + " seconds left";
    }
  }, 1000);
  console.log(intervalId);
  listOfId.push(intervalId);
}
