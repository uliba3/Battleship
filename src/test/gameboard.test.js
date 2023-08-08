const Ship = require('../ship');
const Gameboard = require('../gameboard');

describe('Gameboard factory', () => {
  it('can place a ship at specific coordinates', () => {
    const ship = Ship(3);
    const gameboard = Gameboard();
    gameboard.placeShip(ship, 2, 3, true);
    expect(gameboard.board[3][2]).toBe(ship);
    expect(gameboard.board[3][3]).toBe(ship);
    expect(gameboard.board[3][4]).toBe(ship);
  });

  it('can receive a successful attack', () => {
    const ship = Ship(2);
    const gameboard = Gameboard();
    gameboard.placeShip(ship, 1, 2, true);
    if(gameboard.receiveAttack(1, 2) === true) {
        expect(ship.hits).toBe(1);
    }
  });

  it('can receive a missed attack', () => {
    const gameboard = Gameboard();
    if(gameboard.receiveAttack(4, 6) === false) {
        expect(gameboard.missedAttacks[0]).toStrictEqual([4, 6]);
    }
  });

  it('can report whether all ships are sunk', () => {
    const ship1 = Ship(3);
    const ship2 = Ship(2);
    const gameboard = Gameboard();
    gameboard.placeShip(ship1, 0, 0, true);
    gameboard.placeShip(ship2, 5, 5, true);

    ship1.hit();
    ship1.hit();
    ship1.hit();
    ship2.hit();
    ship2.hit();

    expect(gameboard.allShipsSunk()).toBe(true);
  });

  it('returns false from allShipsSunk() when not all ships are sunk', () => {
    const ship1 = Ship(3);
    const ship2 = Ship(2);
    const gameboard = Gameboard();
    gameboard.placeShip(ship1, 0, 0, true);
    gameboard.placeShip(ship2, 5, 5, true);

    ship1.hit();
    ship2.hit();

    expect(gameboard.allShipsSunk()).toBe(false);
  });
});
