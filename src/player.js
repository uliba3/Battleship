const Ship = require('./ship');
const Gameboard = require('./gameboard');

function Player(name, enemyGameboard) {
    function attack(x, y) {
      return enemyGameboard.receiveAttack(x, y);
    }
  
    return {
      name,
      attack,
    };
  }
  
  module.exports = Player;
  
  
  module.exports = Player;
  