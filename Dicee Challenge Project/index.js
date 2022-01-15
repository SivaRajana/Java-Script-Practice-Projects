var randomNumber1;
randomNumber1=(Math.floor(Math.random()*6+1));
document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 + ".png");


var randomNumber2;
randomNumber2=Math.floor(Math.random()*6+1);
document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 + ".png");

if( randomNumber1 == randomNumber2){
    document.querySelector("h1").textContent = "Game is Draw!!";
}
else if( randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Won";
}
else{
    document.querySelector("h1").textContent = "Player 2 Won";
}