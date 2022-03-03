let container_element = document.getElementById("colorPickerContainer");
let span_element = document.getElementById("selectedColorHexCode");

function buttonCLicked1() {
  container_element.style.backgroundColor = "#e0e0e0";
  span_element.textContent = "#e0e0e0";
}

function buttonCLicked2() {
  container_element.style.backgroundColor = "#6fcf97";
  span_element.textContent = "#6fcf97";
}

function buttonCLicked3() {
  container_element.style.backgroundColor = "#56ccf2";
  span_element.textContent = "#56ccf2";
}

function buttonCLicked4() {
  container_element.style.backgroundColor = "#bb6bd9";
  span_element.textContent = "#bb6bd9";
}
