let bgInput = document.getElementById("bgColorInput");
let fontInput = document.getElementById("fontColorInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let fontWeightInput = document.getElementById("fontWeightInput");
let paddingInput = document.getElementById("paddingInput");
let borderRadius = document.getElementById("borderRadiusInput");
let customButton = document.getElementById("customButton");

function makeButton() {
  let bgInputValue = bgInput.value;
  let fontInputValue = fontInput.value;
  let fontSizeInputValue = fontSizeInput.value;
  let fontWeightInputValue = fontWeightInput.value;
  let paddingInputValue = paddingInput.value;
  let borderRadiusValue = borderRadius.value;

  customButton.style.backgroundColor = bgInputValue;
  customButton.style.color = fontInputValue;
  customButton.style.fontSize = fontSizeInputValue;
  customButton.style.fontWeight = fontWeightInputValue;
  customButton.style.padding = paddingInputValue;
  customButton.style.borderRadius = borderRadiusValue;
}
