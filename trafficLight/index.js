let redCircleElement = document.getElementById("stopLight");
let yellowCircleElement = document.getElementById("readyLight");
let greenCircleElement = document.getElementById("goLight");
let stopButtonElement = document.getElementById("stopButton");
let readyButtonElement = document.getElementById("readyButton");
let goButtonElement = document.getElementById("goButton");

function onStop() {
  redCircleElement.style.backgroundColor = "#cf1124";
  stopButtonElement.style.backgroundColor = "#cf1124";
  yellowCircleElement.style.backgroundColor = "#4b5069";
  readyButtonElement.style.backgroundColor = "#4b5069";
  greenCircleElement.style.backgroundColor = "#4b5069";
  goButtonElement.style.backgroundColor = "#4b5069";
}
function onReady() {
  yellowCircleElement.style.backgroundColor = "#f7c948";
  readyButtonElement.style.backgroundColor = "#f7c948";
  redCircleElement.style.backgroundColor = "#4b5069";
  stopButtonElement.style.backgroundColor = "#4b5069";
  greenCircleElement.style.backgroundColor = "#4b5069";
  goButtonElement.style.backgroundColor = "#4b5069";
}
function onGo() {
  greenCircleElement.style.backgroundColor = "#199473";
  goButtonElement.style.backgroundColor = "#199473";
  redCircleElement.style.backgroundColor = "#4b5069";
  stopButtonElement.style.backgroundColor = "#4b5069";
  yellowCircleElement.style.backgroundColor = "#4b5069";
  readyButtonElement.style.backgroundColor = "#4b5069";
}
