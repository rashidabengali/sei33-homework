const expect = require('chai').expect;

const findMatch = require('../google.js')

describe('Find Match', () => {

  it('should return true if any two items can be added and equal the value of the sum', () => {

    const sum = 9;
    const array = [3, 5, 1, 4];
    const answer = findMatch(array, sum);
    expect(answer).to.deep.equal(true)
  });

  it('should return false if any two items can be added and does not equal the value of the sum', () => {

    const sum = 6;
    const array = [2, 3, 5, 8];
    const answer = findMatch(array, sum);
    expect(answer).to.deep.equal(false)
  });

})
