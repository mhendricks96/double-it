'use strict';
var number = 5;
//let score = number;

function double() {
  number *= 2;
  console.log(number);
}
//double(); // this function doubles the number

function rng() {
  let luck = Math.floor(Math.random() * (100 - 0) + 0);
  return luck;
}

//rng(); // this functions returns a rando number between 0 - 100
// we need to replace the while loop with an event listener and larger gameloop.
while (number < 100) { //this while loop is for testing
  let lucky = rng(); // this is where the important part begins
  if (lucky >= 50) {
    double();
  }
  if (lucky < 50) {
    number = 5;
    console.log('try again');
    break;
  }
}
