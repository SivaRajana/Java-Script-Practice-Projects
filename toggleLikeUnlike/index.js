let puppyImgElement = document.getElementById("puppyImage");
let buttonElement = document.getElementById("likeButton");
let likeThumbElement = document.getElementById("likeIcon");

let buttonClicked = false;

function onClickLikeButton() {
  if (buttonClicked === false) {
    puppyImgElement.src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
    buttonElement.style.backgroundColor = "#0967d2";
    buttonElement.style.color = "#cbd2d9";
    likeThumbElement.style.color = "#0967d2";
    buttonClicked = true;
  } else {
    puppyImgElement.src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
    buttonElement.style.backgroundColor = "#cbd2d9";
    buttonElement.style.color = "#9aa5b1";
    likeThumbElement.style.color = "#cbd2d9";
    buttonClicked = false;
  }
}
