const Ship = require('./ship');
const Gameboard = require('./gameboard');

function Computer(enemyGameboard) {
    const attackedCoordinates = [];
  
    function getRandomCoordinates() {
      const x = Math.floor(Math.random() * enemyGameboard.board.length);
      const y = Math.floor(Math.random() * enemyGameboard.board.length);
      return [x, y];
    }
  
    function attack() {
      let [x, y] = getRandomCoordinates();
  
      // Ensure the computer doesn't attack the same coordinates twice
      while (attackedCoordinates.some(coords => coords[0] === x && coords[1] === y)) {
        [x, y] = getRandomCoordinates();
      }
  
      attackedCoordinates.push([x, y]);
  
      return enemyGameboard.receiveAttack(x, y);
    }
  
    return {
      attack,
    };
  }
  
  module.exports = Computer;
  