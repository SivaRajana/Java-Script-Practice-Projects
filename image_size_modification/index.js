let imageElement = document.getElementById("image");
let imageWidthElOutput = document.getElementById("imageWidth");
let warningMessageEl = document.getElementById("warningMessage");

let originalImageWidth = "200px";

imageElement.style.width = originalImageWidth;

function onDecrease() {
  let modifiedWidth = parseInt(originalImageWidth);
  console.log(modifiedWidth);
  if (modifiedWidth > 100) {
    modifiedWidth = modifiedWidth - 5;
    originalImageWidth = modifiedWidth;
    imageElement.style.width = modifiedWidth + "px";
    imageWidthElOutput.textContent = modifiedWidth + "px";
    warningMessageEl.textContent = "";
  } else {
    warningMessageEl.textContent = "element shouldn't decreaes less than 100px";
  }
}

function onIncrease() {
  let modifiedWidth = parseInt(originalImageWidth);
  console.log(modifiedWidth);
  if (modifiedWidth < 300) {
    modifiedWidth = modifiedWidth + 5;
    originalImageWidth = modifiedWidth;
    imageElement.style.width = modifiedWidth + "px";
    imageWidthElOutput.textContent = modifiedWidth + "px";
    warningMessageEl.textContent = "";
  } else {
    warningMessageEl.textContent = "element shouldn't increase more than 300px";
  }
}
