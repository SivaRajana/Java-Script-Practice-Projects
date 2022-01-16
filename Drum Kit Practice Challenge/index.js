
// adding event listener to all the button elements.
var numberOfDrums = document.querySelectorAll(".drum").length;

for( var i = 0 ; i < numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", drumClicked);
}

function drumClicked(){
    var whichDrumClicked=this.innerHTML;
    soundBasedOnEvent(whichDrumClicked);
    animation(whichDrumClicked);
    
}

document.addEventListener("keydown",function (pressedOne){
    soundBasedOnEvent(pressedOne.key);
    animation(pressedOne.key);
});

function animation(className){
    document.querySelector("." + className).classList.add("pressed");
    var unAnimaton=setTimeout(function(){
        document.querySelector("." + className).classList.remove("pressed");
    },100);
}


function soundBasedOnEvent(whichKey){
    
    switch(whichKey){
        
        case "w":
            var soundW= new Audio("sounds/crash.mp3");
            soundW.play();
            break;
        case ("a"):
            var sounda= new Audio("sounds/kick-bass.mp3");
            sounda.play();
            break;
        case (  "s"):
            var sounds= new Audio("sounds/snare.mp3");
            sounds.play();
            break;
        case (  "d"):
            var soundd= new Audio("sounds/tom-1.mp3");
            soundd.play();
            break;
        case (  "j"):
            var soundj= new Audio("sounds/tom-2.mp3");
            soundj.play();
        break;
           case (  "k"):
            var soundk= new Audio("sounds/tom-3.mp3");
            soundk.play();
           break;
        case (  "l"):
            var soundl= new Audio("sounds/tom-4.mp3");
            soundl.play();
           break;
        default:
                console.log("not found");
    
        }
}