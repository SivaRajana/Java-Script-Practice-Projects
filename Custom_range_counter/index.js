let startBtnEl = document.getElementById("startBtn");

let timerMessage = (startValue, endValue) => {
  let counterTextEl = document.getElementById("counterText");
  counterTextEl.textContent = startValue;
  let cancelScheduleId = setInterval(function () {
    if (startValue < endValue) {
      startValue += 1;
      counterTextEl.textContent = startValue;
    } else {
      clearInterval(cancelScheduleId);
    }
  }, 1000);
};

let counterApp = function () {
  let startInputEl = document.getElementById("fromUserInput");
  let endInputEl = document.getElementById("toUserInput");
  let startValue = startInputEl.value;
  let endValue = endInputEl.value;
  if (startValue === "" || endValue === "") {
    alert("Please enter the proper Values");
  } else {
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    timerMessage(startValue, endValue);
  }
};

startBtnEl.addEventListener("click", counterApp);
