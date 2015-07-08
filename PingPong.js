function myFunction() {

var stringNumberPicked = prompt("Pick a whole number greater than zero!");
var integerNumberPicked = parseInt(stringNumberPicked);
var currentNum = 0;

if(integerNumberPicked <= 0) {
  document.write("Please enter a whole number greater than zero. Reload page to try again!");
}
else {
  document.write(currentNum + "<br>");
  currentNum = currentNum + 1;
  while(currentNum <= integerNumberPicked) {
    if((currentNum % 5 == 0) && (currentNum % 3 == 0)) {
      document.write("<b>PING-PONG</b>");
    }
    else if(currentNum % 5 == 0) {
      document.write("<b>pong</b>");
    }
    else if(currentNum % 3 == 0) {
      document.write("<b>ping</b>");
    }
    else {
      document.write(currentNum);
    }

  currentNum = currentNum + 1;
  document.write("<br>")
  }
  document.write("<br><br><b>Reload page to play again!</b>")
}
}
