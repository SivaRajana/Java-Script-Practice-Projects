let billAmountEl = document.getElementById("billAmount");
let percentageTipEl = document.getElementById("percentageTip");
let tipAmountEl = document.getElementById("tipAmount");
let totalAmountEl = document.getElementById("totalAmount");
let errorMessageEl = document.getElementById("errorMessage");

function calculate() {
  let a = billAmountEl.value;
  let b = percentageTipEl.value;
  if ((a === "") | (b === "")) {
    errorMessageEl.textContent = "Please enter a valid input";
  } else {
    a = parseInt(a);
    b = parseInt(b);
    let tip = (b / 100) * a;
    let total = tip + a;
    tipAmountEl.value = tip;
    totalAmountEl.value = total;
    errorMessageEl.textContent = "";
  }
}
