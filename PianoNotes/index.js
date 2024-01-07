var numberOfDrumButtons = document.querySelectorAll(".key").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".key")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("Audio/Piano11.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("Audio/Piano12.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('Audio/Piano13.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('Audio/Piano14.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('Audio/Piano15.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('Audio/Piano16.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('Audio/Piano17.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
