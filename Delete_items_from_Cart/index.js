let itemList = [
  {
    itemName: "Veg Biryani",
    uniqueNo: 1
  },
  {
    itemName: "Chicken 65",
    uniqueNo: 2
  },
  {
    itemName: "Paratha",
    uniqueNo: 3
  }
];

let orderedItemsSubContainerEl = document.getElementById(
  "orderedItemsSubContainer"
);
function deleteItemFromList(itemId) {
  let itemIdEl = document.getElementById(itemId);
  orderedItemsSubContainerEl.removeChild(itemIdEl);
}

function appendOrderedItem(itemObj) {
  let itemId = "item" + itemObj.uniqueNo;
  let buttonid = "button" + itemObj.uniqueNo;

  let listEl = document.createElement("li");
  listEl.setAttribute("id", itemId);
  listEl.classList.add("li-Style", "d-flex", "flex-row", "m-2");
  orderedItemsSubContainerEl.appendChild(listEl);

  let itemNameEl = document.createElement("p");
  itemNameEl.textContent = itemObj.itemName;
  itemNameEl.classList.add("m-2");
  listEl.appendChild(itemNameEl);

  let buttonEl = document.createElement("button");
  buttonEl.id = buttonid;
  buttonEl.textContent = "Cancel";
  buttonEl.classList.add("btn", "btn-danger");
  buttonEl.onclick = function () {
    deleteItemFromList(itemId);
  };
  listEl.appendChild(buttonEl);
}

for (let item of itemList) {
  appendOrderedItem(item);
}
