let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");
let themeUserInputEl = document.getElementById("themeUserInput");

let changeTheme = function (event) {
  let userInput = themeUserInputEl.value;
  console.log(userInput);
  console.log(event.key);
  if (event.key === "Enter") {
    if (userInput === "Dark") {
      bgContainerEl.style.backgroundImage =
        "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
      headingEl.style.color = "white";
      themeUserInputEl.value = "";
    } else if (userInput === "Light") {
      bgContainerEl.style.backgroundImage =
        "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
      headingEl.style.color = "#014d40";
      themeUserInputEl.value = "";
    } else {
      alert("Please enter a valid theme!!");
    }
  }
};
themeUserInputEl.addEventListener("keydown", changeTheme);
