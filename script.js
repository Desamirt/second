document.getElementById("moveButton").addEventListener("click", function() {
  var yellowSquare = document.getElementById("yellowSquare");
  var redSquare = document.getElementById("redSquare");
  var yellowSquareRect = yellowSquare.getBoundingClientRect();

  var newX = (yellowSquareRect.width - redSquare.offsetWidth) / 2;
  var newY = (yellowSquareRect.height - redSquare.offsetHeight) / 2;

  [redSquare.style.top](blocked) = newY + "px";
  redSquare.style.left = newX + "px";
});