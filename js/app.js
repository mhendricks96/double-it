'use strict';
let button = document.getElementById('start');
let doubleButton = document.getElementById('double');
let closeButton = document.getElementById('close');
var number = 5;
//let score = number;

// Place all global variables above this comment


function double() {
  number *= 2;
  console.log(number);
}
//double(); // this function doubles the number

function rng() {
  let luck = Math.floor(Math.random() * (100 - 0) + 0);
  return luck;
}

//rng(); // this functions returns a random number between 0 - 100
// we need to replace the while loop with an event listener and larger game loop.
function gameLoop() {
  // let game = true;
  // while (game) { //this while loop is for testing
  let lucky = rng(); // this is where the important part begins
  if (lucky >= 40) {
    double();
  }
  if (lucky < 40) {
    number = 5;
    // game = false;
    console.log('try again');
    // break;
  }
}
// }

function doubleClick() {
  gameLoop();
}
// Place all functions above this comment

doubleButton.addEventListener('click', doubleClick);

// function clickHandle() {
//   double();

// }

// button.addEventListener('click', clickHandle);
