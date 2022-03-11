let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInputEl = document.getElementById("startIndexInput");
let deleteCountInputEl = document.getElementById("deleteCountInput");
let itemToAddInputEl = document.getElementById("itemToAddInput");

function showUpdatedArray() {
  let updatedArr = JSON.stringify(arr);
  document.getElementById("updatedArray").textContent = updatedArr;
}
showUpdatedArray();

function onSplice() {
  let startIndex = startIndexInputEl.value;
  if (startIndex === "") {
    alert("Start Index can't be empty!!");
    return;
  } else {
    let deleteItemCount = deleteCountInputEl.value;
    let itemValue = itemToAddInputEl.value;
    arr.splice(startIndex, deleteItemCount, itemValue);
    showUpdatedArray();
  }
}
