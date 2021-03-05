'use strict';
// global variables
//let button = document.getElementById('start');
let doubleButton = document.getElementById('double');
let closeButton = document.getElementById('close');
var number = 5;
let div1 = document.createElement('div');
let play = document.getElementById('play');

//Double it Function

function double() {
  number *= 2;
  console.log(number);
}

function rng() {
  let luck = Math.floor(Math.random() * (100 - 0) + 0);
  return luck;
}

function gameLoop() {
  let lucky = rng();
  if (lucky >= 40) {
    double();
    renderNumber(div1);
    div1.textContent = number;

  }
  if (lucky < 40) {
    number = 5;
    console.log('You have Sucky Luck!!');
    div1.textContent = 'sorry, try again';
  }
}




// render game to index.html main
function renderNumber(div){
  div.textContent = number;
  play.appendChild(div);
}

//render function for writing to leader board
function renderLeader(){

}; 

//event listeners
function doubleClick() {
  gameLoop();

}
function closeGame(){
  'does something'
}

// Place all functions above this comment

doubleButton.addEventListener('click', doubleClick);

closeButton.addEventListener('click', closeGame);
