'use strict';
// global variables
//let button = document.getElementById('start');
let doubleButton = document.getElementById('double');
let closeButton = document.getElementById('close');
var number = 5;
let div1 = document.createElement('div');
let play = document.getElementById('play');
let allUsersArray = JSON.parse(localStorage.getItem('player')) || [];

//Double it Function

function double() {
  number *= 2;
  //console.log(number);
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
    //console.log('You have Sucky Luck!!');
    div1.textContent = 'sorry, try again';
  }
}

function UserId (name, score){
  this.name = name;
  this.score = score;
  allUsersArray.push(this);
}


// render game to index.html main
function renderNumber(div){
  div.textContent = number;
  play.appendChild(div);
}

//render function for writing to leader board
function renderLeader(){
  console.log('backed out');
  console.log(allUsersArray);


}



//event listeners
function doubleClick() {
  gameLoop();

}
function closeGame(){
  renderLeader();
  let userName = prompt('Whats your name, quitter?');

  let newUserId = new UserId(userName, number );
  
  let stringifiedArray = JSON.stringify(allUsersArray);
  localStorage.setItem('player', stringifiedArray);

  
  //let stringifiednewUser = JSON.stringify(newUserId);
  //localStorage.setItem('Player', stringifiednewUser);
  window.location.href = '/board.html';
  number = 0;
}


// Place all functions above this comment

doubleButton.addEventListener('click', doubleClick);

closeButton.addEventListener('click', closeGame);
