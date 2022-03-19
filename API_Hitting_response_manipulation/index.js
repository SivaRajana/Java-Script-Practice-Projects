let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");
let responseStatusEl = document.getElementById("responseStatus");
let responseBodyEl = document.getElementById("responseBody");

let httpMethod = 'POST';
let requestUrl = "";
let requestBody = {

}

function fetchAPI(url, bodyToSend) {
    let options = {
        method: httpMethod,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Bearer 88d29346e4fa944ddf74ace89b4affef650c475bee496f6c7c04ee2e352695c0"
        },
        body: bodyToSend,
    }
    fetch(url, options)
    .then(function (response){
        return response.json()
    })
    .then(function (jsonData){
        console.log(jsonData);
        responseStatusEl.value = jsonData.code;
        responseBodyEl.value = JSON.stringify(jsonData);
    })
}

function validateInputData() {
    if (requestUrlEl === "") {
        requestUrlErrMsgEl.textContent = "Required*"
    } else {
        requestUrlErrMsgEl.textContent = "";
        requestUrl = requestUrlEl.value;
        requestBody = requestBodyEl.value;
    }
    fetchAPI(requestUrl, requestBody);
}


requestMethodEl.addEventListener("change", function(event){
    httpMethod = event.target.value;
})
consoleFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateInputData();
})