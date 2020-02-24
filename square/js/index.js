var button = document.querySelector("button");
var span = document.querySelector("span");
var input = document.querySelector("input");
var square = document.querySelector(".square");
var sideSmall = 10;
var countSquare = 0;

function maxRandom(max) {
  return Math.ceil(Math.random() * max);
}
function setSquare() {
  square.style.display = "block";
  square.innerHTML = '<div class="smallSquare"></div>';
  var small = document.querySelector(".smallSquare");
  //Size of square
  sideSmall += maxRandom(90);
  small.style.width = sideSmall + "px";
  small.style.height = sideSmall + "px";
  //Position of square
  small.style.left =
    Math.ceil((square.offsetWidth - sideSmall) * Math.random()) + "px";
  small.style.top =
    Math.ceil((square.offsetHeight - sideSmall) * Math.random()) + "px";
}
function gameOver() {
  square.style.display = "flex";
  square.innerHTML = '<div>Game over! Your result <span class="gameOver"></span> squares!</div>';
  document.querySelector('.gameOver').innerHTML = countSquare;
}

// Style button during event of mouse
button.addEventListener("mouseover", function(event) {
  this.classList.add("overButton");
});
button.addEventListener("mouseout", function(event) {
  this.classList.remove("overButton");
});
button.addEventListener("mousedown", function(event) {
  this.classList.add("downButton");
  //Start game
  setTimeout(setSquare, 1300);
  //Game over
  setTimeout(gameOver, +input.value * 1000 + 1300);
});

// During of game
span.innerHTML = input.value;
input.addEventListener("input", function(event) {
  span.innerHTML = input.value;
});

// Catch the square

square.addEventListener("click", function(event) {
  var atr = event.target.getAttribute("class");

  if (atr.includes("smallSquare")) {
    ++countSquare
    var small = document.querySelector(".smallSquare");
    //Size of square
    sideSmall = 10 + maxRandom(90);
    small.style.width = sideSmall + "px";
    small.style.height = sideSmall + "px";
    //Position of square
    small.style.left =
      Math.ceil((square.offsetWidth - sideSmall) * Math.random()) + "px";
    small.style.top =
      Math.ceil((square.offsetHeight - sideSmall) * Math.random()) + "px";
  }
});
