'use strict';
// Global variables
let doubleButton = document.getElementById('double');
let closeButton = document.getElementById('close');
let number = 5;
let div1 = document.createElement('div');
let play = document.getElementById('play');
let allUsersArray = JSON.parse(localStorage.getItem('player')) || [];

// Functions

// doubles the current score.
function double() {
  number *= 2;
}

// gets random number between 0-100.
function rng() {
  let luck = Math.floor(Math.random() * (100 - 0) + 0);
  return luck;
}

// uses random number to decide if user wins or loses.
function gameLoop() {
  let lucky = rng();
  if (lucky >= 40) {
    double();
    renderNumber(div1);
    div1.textContent = number;
  }
  if (lucky < 40) {
    number = 5;
    div1.textContent = 'Start back at 0';
  }
}

// constructor to make each user who quits into an object.
function UserId (name, score){
  this.name = name;
  this.score = score;
  allUsersArray.push(this);
}


// renders current score to game screen.
function renderNumber(div){
  div.textContent = number;
  play.appendChild(div);
}

//Event listeners

// controls "double it" button.
function doubleClick() {
  gameLoop();
}

//controls "back out" button.
function closeGame(){
  let userName = prompt('whats your name, quitter?');
  let newUserId = new UserId(userName, number );
  let stringifiedArray = JSON.stringify(allUsersArray);
  localStorage.setItem('player', stringifiedArray);
  window.location.href = '/board.html';
  number = 0;
}

// Event Listeners
doubleButton.addEventListener('click', doubleClick);
closeButton.addEventListener('click', closeGame);
