//Detecting Click Press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;
        //Calling function makeSound with sending parameter "buttionInnerHTML"(clicks)
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

//Detecting Keyboard Press
document.addEventListener("keydown", function(event) {
    //Calling function makeSound with sending parameter "event.key"
    makeSound(event.key);

    buttonAnimation(event.key);
});

//Making Sound
function makeSound(letter) {

    switch (letter) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default: console.log(buttonInnerHTML);
    }

}

//Icon Flash
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    var delay = 100;
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, delay);
    
}