const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('returns 4 when a = 1 and b = 3', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('returns 5 when a = 1 and b = 3.7', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('returns 5 when a = 1.2 and b = 3.7', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('returns 6 when a = 1.5 and b = 3.7', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Additional edge cases
  it('returns 0 when a = 0 and b = 0', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('returns -4 when a = -1 and b = -3', function () {
    assert.strictEqual(calculateNumber(-1, -3), -4);
  });

  it('returns -5 when a = -1.2 and b = -3.7', function () {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });

  it('returns -6 when a = -1.5 and b = -3.7', function () {
    assert.strictEqual(calculateNumber(-1.8, -3.9), -6);
  });
});
