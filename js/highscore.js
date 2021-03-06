'use strict';
//global variables
let leaderBoard = document.getElementById('leaderBoard');
let retrievedPlayers = JSON.parse(localStorage.getItem('player'));

// Functions

//orders the high score array in descending order
function sortPlayers() {
  retrievedPlayers.sort(function (a, b) {
    return b.score - a.score;
  });
}
sortPlayers();

// renders high score list by iterating through the users stored in local storage
for (let i = 0; i < retrievedPlayers.length; i++){
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  leaderBoard.appendChild(tr);
  td.textContent = `${retrievedPlayers[i].name}: ${retrievedPlayers[i].score} points`;
  tr.appendChild(td);
}
