'use strict'
//global variables
let leaderBoard = document.getElementById('leaderBoard');

let retrievedPlayers = JSON.parse(localStorage.getItem('player'));
console.log(retrievedPlayers);
function sortPlayers() {
  retrievedPlayers.sort(function (a, b) {
    return b.score - a.score;
  });
}
sortPlayers();
console.log(retrievedPlayers);

for (let i = 0; i < retrievedPlayers.length; i++){

  let tr = document.createElement('tr');
  let td = document.createElement('td');
  leaderBoard.appendChild(tr);
  td.textContent = `${retrievedPlayers[i].name}: ${retrievedPlayers[i].score} points`;
  tr.appendChild(td);
}
