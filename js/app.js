'use strict'
// global variables 
let button = document.getElementById('start');
let doubleButton = document.getElementById('double');
let closeButton = document.getElementById('close');
var number = 5;

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
  }
  if (lucky < 40) {
    number = 5;
    console.log('You have Sucky Luck!!');
  }
}

// render game to index.html main
function renderNumber(){
  
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
