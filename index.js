
// Mouse event

for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        animatedButton(buttonInnerHTML);
    });
}


// Keyboard event

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    animatedButton(event.key);
});

// Play the sound
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        default: console.log(buttonInnerHTML);
    }
}

// Animate when mouse or keyboard event is happened
function animatedButton(current_key) {
    
    document.querySelector("." + current_key).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("." + current_key).classList.remove("pressed");
    }, 300);
}