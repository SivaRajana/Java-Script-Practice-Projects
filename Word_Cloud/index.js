let wordCloud = [
  "Hello",
  "hii",
  "how",
  "what",
  "you",
  "yourself",
  "name",
  "victory",
  "food",
  "lovely",
  "beautiful",
  "written",
  "where",
  "who",
  "awesome"
];
let wordsContainerEl = document.getElementById("wordsContainer");
let addBtn = document.getElementById("addBtn");

function createAndAppendCloudWord(word) {
  let wordEl = document.createElement("span");
  wordEl.textContent = word;
  let fontsize = Math.ceil(Math.random() * 40);
  wordEl.style.fontSize = fontsize + "px";
  wordEl.classList.add("cloud-word");
  wordsContainerEl.appendChild(wordEl);
}

for (let word of wordCloud) {
  createAndAppendCloudWord(word);
}

addBtn.onclick = function () {
  let errorMsgEl = document.getElementById("errorMsg");
  let userInputEl = document.getElementById("userInput");
  let inputvalue = userInputEl.value;
  if (inputvalue === "") {
    errorMsgEl.textContent = "Please enter a word";
  } else {
    errorMsgEl.textContent = "";
    createAndAppendCloudWord(inputvalue);
  }
  userInputEl.value = "";
};
