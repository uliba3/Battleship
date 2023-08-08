const Ship = require('./ship');
function Gameboard(boardSize = 10) {
    let board = new Array(boardSize);
    for (let i = 0; i < boardSize; i++) {
      board[i] = new Array(boardSize).fill(null);
    }

    let missedAttacks = [];

    let allShips = [];

    function placeShip(ship, x, y, isHorizontal) {
      if (isHorizontal) {
        for (let i = 0; i < ship.length; i++) {
          board[y][x + i] = ship;
        }
      } else {
        for (let i = 0; i < ship.length; i++) {
          board[y + i][x] = ship;
        }
      }
      allShips.push(ship);
    }
  
    function receiveAttack(x, y) {
      if (board[y][x] === null) {
        missedAttacks.push([x, y]);
        return false;
      } else if (board[y][x] !== 'miss') {
        const ship = board[y][x];
        ship.hit();
        return true;
      }
    }
  
    function allShipsSunk() {
        for(const ship of allShips) {
            if(!ship.isSunk()){
                return false;
            }
        }
        return true;
    }
  
    return {
      board,
      missedAttacks,
      allShips,
      placeShip,
      receiveAttack,
      allShipsSunk,
    };
  }
  
  module.exports = Gameboard;
  