function Ship(length) {
    const ship = {
      length: length,
      hits: 0,
      hit() {
        this.hits++;
      },
      isSunk() {
        return this.hits === this.length;
      },
    };
  
    return ship;
  }
  
  module.exports = Ship;
  