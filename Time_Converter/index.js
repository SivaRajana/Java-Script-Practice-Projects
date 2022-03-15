let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let timeInSecondsEl = document.getElementById("timeInSeconds");

convertBtnEl.addEventListener("click", function () {
  timeInSecondsEl.classList.remove("time-seconds-display");
  let hoursInputValue = hoursInputEl.value;
  let minutesInputValue = minutesInputEl.value;
  let errorMsgEl = document.getElementById("errorMsg");
  if (hoursInputValue === "") {
    errorMsgEl.textContent = "Please Enter a valid number of hours";
    timeInSecondsEl.textContent = "";
  } else if (minutesInputValue === "") {
    errorMsgEl.textContent = "Please Enter a valid number of minutes";
    timeInSecondsEl.textContent = "";
  } else {
    errorMsgEl.textContent = "";
    convertToSeconds(hoursInputValue, minutesInputValue);
  }
});

function convertToSeconds(hours, minutes) {
  let timeSeconds = hours * 3600 + minutes * 60;
  timeInSecondsEl.textContent = timeSeconds;
  timeInSecondsEl.classList.add("time-seconds-display");
}
