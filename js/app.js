'use strict';
// Global variables
let doubleButton = document.getElementById('double');
let closeButton = document.getElementById('close');
let difficultySelect = document.getElementById('difficulty');
let number = 5;
let div1 = document.createElement('div');
let play = document.getElementById('play');
let allUsersArray = JSON.parse(localStorage.getItem('player')) || [];

// Functions

// doubles the current number.
function double() {
  number *= 2;
}

// gets random number between 0-100.
function rng() {
  let luck = Math.floor(Math.random() * (100 - 0) + 0);
  return luck;
}

// appends current score to "Score div".
function renderNumber(div) {
  div.textContent = number;
  play.appendChild(div);
}

//doubles user score and renders onto gamescreen
function renderNewScore (){
  double();
  renderNumber(div1);
  div1.textContent = number;
}

// uses random number to decide if user wins or loses.
// game loop for hard mode
function gameLoopHard() {
  let lucky = rng();
  if (lucky >= 50) {
    renderNewScore();
  }
  if (lucky < 50) {
    number = 5;
    div1.textContent = 'Start back at 0';
  }
}

//game loop for medium mode
function gameLoopMedium() {
  let lucky = rng();
  if (lucky >= 32) {
    renderNewScore();
  }
  if (lucky < 32) {
    number = 5;
    div1.textContent = 'Start back at 0';
  }
}

//game loop for easy mode
function gameLoopEasy() {
  let lucky = rng();
  if (lucky >= 15) {
    renderNewScore();
  }
  if (lucky < 15) {
    number = 5;
    div1.textContent = 'Start back at 0';
  }
}

// random game loop
function gameLoopRandom() {
  let lucky = rng();
  let oddsArray = [50, 32, 15];
  let luckNumber = Math.floor(Math.random() * oddsArray.length);
  if (lucky >= oddsArray[luckNumber]) {
    renderNewScore();
  }
  if (lucky < oddsArray[luckNumber]) {
    number = 5;
    div1.textContent = 'Start back at 0';
  }
  console.log(oddsArray[luckNumber]);
}

// constructor to make each user who quits into an object.
function UserId(name, score) {
  this.name = name;
  this.score = score;
  allUsersArray.push(this);
}

//Event listeners

// controls "double it" button.
function doubleClick() {
  if (difficultySelect.options[difficultySelect.selectedIndex].value === 'easy') {
    console.log('easy mode');
    gameLoopEasy();
  } else if (difficultySelect.options[difficultySelect.selectedIndex].value === 'medium') {
    console.log('medium mode');
    gameLoopMedium();
  } else if (difficultySelect.options[difficultySelect.selectedIndex].value === 'hard'){
    console.log('hard mode');
    gameLoopHard();
  } else {
    console.log('ultimate mode');
    gameLoopRandom();
  }
}

//controls "back out" button.
function closeGame() {
  let userName = prompt('Whats your name, quitter?');
  let newUserId = new UserId(userName, number);
  let stringifiedArray = JSON.stringify(allUsersArray);
  localStorage.setItem('player', stringifiedArray);
  window.location.href = '/board.html';
  number = 0;
}

// Event Listeners
doubleButton.addEventListener('click', doubleClick);
closeButton.addEventListener('click', closeGame);
