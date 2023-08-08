const Ship = require('./ship');
const Gameboard = require('./gameboard');
const Player = require('./player');
const Computer = require('./computer');

// dom.js
function renderGameboard(gameboard, id) {
    const container = document.getElementById(id);
    container.innerHTML = ''; // Clear previous content
  
    for (let y = 0; y < gameboard.board.length; y++) {
      for (let x = 0; x < gameboard.board[y].length; x++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerText = ".";
        
        if (gameboard.board[y][x]) {
          cell.classList.add('ship'); // Apply a CSS class for ships
        }
  
        container.appendChild(cell);
      }
    }
  }
  
  function handleClick(player, x, y) {
    player.attack(x, y);
    // Update the game state and render the gameboards again
    renderGameboard(player.gameboard, 'player-board');
    renderGameboard(player.enemyGameboard, 'enemy-board');
  }
  
  module.exports = {
    renderGameboard,
    handleClick,
  };
  