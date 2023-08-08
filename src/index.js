const Ship = require('./ship');
const Gameboard = require('./gameboard');
const Player = require('./player');
const Computer = require('./computer');
const { renderGameboard, handleClick } = require('./dom');

// Initialize players and gameboards
const playerGameboard = Gameboard();
const computerGameboard = Gameboard();

const player = Player('Player 1', computerGameboard);
const computer = Computer(playerGameboard);

// Place ships on gameboards (You can implement your own ship placement logic)

// Render initial game state
renderGameboard(playerGameboard, 'player-board');
renderGameboard(computerGameboard, 'enemy-board');

// Game loop
function gameLoop() {
  // Check if game is over
  if (playerGameboard.allShipsSunk() || computerGameboard.allShipsSunk()) {
    // Display winner
    return;
  }

  // Player's turn: Handle user clicks on enemy gameboard
  const enemyBoardContainer = document.getElementById('enemy-board');
  enemyBoardContainer.addEventListener('click', event => {
    const cell = event.target;
    const x = cell.cellIndex;
    const y = cell.parentNode.rowIndex;

    if (!cell.classList.contains('cell')) {
      return; // Clicked on non-cell element
    }

    // Make an attack
    handleClick(player, x, y);

    // Computer's turn: Implement computer attack logic here
    // computer.attack();

    // Continue the game loop
    gameLoop();
  });
}

// Start the game loop
gameLoop();
