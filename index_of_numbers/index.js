let numbers = [17, 31, 77, 20, 63];

let btnEl = document.getElementById("findBtn");
btnEl.onclick = function () {
  let value = document.getElementById("userInput").value;
  if (value !== "") {
    let resultIndex = numbers.findIndex(function (item) {
      if (item === parseInt(value)) {
        return true;
      }
      return false;
    });
    let displayEl = document.getElementById("indexOfNumber");
    displayEl.textContent = resultIndex;
    document.getElementById("userInput").value = "";
  } else {
    alert("enter a number");
    return;
  }
};
