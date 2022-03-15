let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");

let count = 10;
let timerId = setInterval(function () {
  if (count === 0) {
    timerEl.textContent = "BOOM";
    clearInterval(timerId);
  } else {
    timerEl.textContent = count;
  }
  count -= 1;
}, 1000);

let validateDefuserText = (event) => {
  if (event.key === "Enter") {
    if (event.target.value === "defuse" && count !== -1) {
      console.log(count);
      clearInterval(timerId);
      timerEl.textContent = "You did it!";
    }
  }
};

defuserEl.addEventListener("keydown", validateDefuserText);
