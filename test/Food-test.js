const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const Food = require('../lib/Food.js');
const { blockSize } = require('../lib/gameConfig.js');


describe('Food', function() {

  it('should take in gameW and gameH', function() {
    var food = new Food(10, 10, 10, 10, 'red', 50, 60);

    assert.equal(food.gameW, 50);
    assert.equal(food.gameH, 60);
  });

  it('should have a random number for x and y coordinates', function() {
    var food = new Food(10, 10, 30, 30, 'red', 600, 600, 'image');
    
    expect(food.x).to.be.within(0, food.gameW);
    expect(food.y).to.be.within(0, food.gameH);
  });

  it('should have x and y coordinates that are divisible by blocksize', function() {
    var food = new Food(10, 10, 10, 10, 'red', 50, 60);

    assert.equal((food.x % blockSize), 0);
    assert.equal((food.y % blockSize), 0);
  });

  it('should reset coordinates', function() {
    var food = new Food(10, 10, 30, 30, 'red', 600, 600, 'image');
    food.resetCoordinates([]);

    expect(food.x).to.be.within(0, food.gameW);
    expect(food.y).to.be.within(0, food.gameH);
  });
});