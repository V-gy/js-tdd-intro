// test/capitalizeFirst.test.js
const assert = require('assert');
const Rectangle = require('../Rectangle');
const rectangle = new Rectangle(7, 13);

// give the test suite a label using describe
describe('Rectangle', () => {
  // give the test a label using i
  
  it('is a function accepting two argument', () => {
    
    assert.strictEqual(typeof Rectangle, 'function');
    assert.strictEqual(Rectangle.length, 2);
  });

  it('is square?', () => {
const rectangle = new  Rectangle(7, 7)
    assert.strictEqual(rectangle.isSquare(), true);
  });

  it('not square', () => {
    assert.strictEqual(rectangle.isSquare(), false);
  });

  it('give the area', () => {
    assert.strictEqual(rectangle.getArea(), 91);
  });

  it('give the perimeter', () => {
    assert.strictEqual(rectangle.getPerimeter(), 40);
  });
});