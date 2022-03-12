let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let sendMsgBtnEl = document.getElementById("sendMsgBtn");
let chatMsgContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");

function sendMsgToUser(inputValue) {
    let sendMsgToBotContainer = document.createElement("div");
    sendMsgToBotContainer.classList.add("msg-from-chatbot-container")
    chatMsgContainerEl.appendChild(sendMsgToBotContainer);

    let msgContentEl = document.createElement("p");
    let indexOfMsg = Math.ceil(Math.random() * chatbotMsgList.length) - 1;
    msgContentEl.textContent = chatbotMsgList[indexOfMsg];
    msgContentEl.classList.add("msg-from-chatbot");
    sendMsgToBotContainer.appendChild(msgContentEl);
}

function sendMsgToBot(inputValue) {
    let sendMsgToBotContainer = document.createElement("div");
    sendMsgToBotContainer.classList.add("msg-to-chatbot-container")
    chatMsgContainerEl.appendChild(sendMsgToBotContainer);

    let msgContentEl = document.createElement("p");
    msgContentEl.textContent = inputValue;
    msgContentEl.classList.add("msg-to-chatbot");
    sendMsgToBotContainer.appendChild(msgContentEl);

    userInputEl.value = "";
    sendMsgToUser(inputValue);
}

sendMsgBtnEl.onclick = function() {
    let userInputValue = userInputEl.value;
    sendMsgToBot(userInputValue);
}