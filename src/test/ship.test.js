const Ship = require('../ship');

describe('Ship factory', () => {
  it('creates a ship with the specified length', () => {
    const ship = Ship(3);
    expect(ship.length).toBe(3);
  });

  it('increases the number of hits when hit() is called', () => {
    const ship = Ship(4);
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(2);
  });

  it('returns true from isSunk() when hits equals length', () => {
    const ship = Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  it('returns false from isSunk() when hits is less than length', () => {
    const ship = Ship(3);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });
});
