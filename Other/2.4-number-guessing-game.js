function itsTimeToPlayBoiiiiii() {
  var randomNumber = Math.floor((Math.random() * 100) + 1); //1-100
  while(true) {
    var userInput = prompt("Enter a number between 1-100");
    if(userInput === null) {
      return;
    }
    else if(userInput == randomNumber) {
      alert("correct!");
      break;
    }
    else if(parseInt(userInput) > randomNumber) {
      alert("too high");
    }
    else {
      alert("too low");
    }
  }

}
