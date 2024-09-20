const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
    describe('SUM', function () {
        it('returns 6 when a = 1.4 and b = 4.5', function () {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
          });

        it('returns -4 when a = -3.0 and b = -1.0', function () {
            assert.strictEqual(calculateNumber('SUM', -3.0, -1.0), -4);
          });

        it('returns 4 when a = 3.0 and b = 1.0', function () {
            assert.strictEqual(calculateNumber('SUM', 3.0, 1.0), 4);
          });

        it('returns 0 when a = -2.0 and b = 2.0', function () {
            assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
          });

        it('returns 0 when a = 0.0 and b = 0.0', function () {
            assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
          });
    });

    describe('SUBTRACT', function () {
        it('returns -4 when a = 1.4 and b = 4.5', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
          });

        it('returns -4 when a = -3.0 and b = -1.0', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', -3.0, -1.0), -2);
          });

        it('returns 2 when a = 3.0 and b = 1.0', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 3.0, 1.0), 2);
          });

        it('returns -4 when a = -2.0 and b = 2.0', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4);
          });

        it('returns 0 when a = 0.0 and b = 0.0', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
          });
    });

    describe('DIVIDE', function () {
        it('returns 0.2 when a = 1.4 and b = 4.5', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
          });

        it('returns Error when a = 1.4 and b = 0', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
          });

        it('returns 4 when a = 8.0 and b = 2.0', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4);
          });

        it('returns -3.5 when a = -7.0 and b = 2.0', function () {
            assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
          });

        it('returns -3.5 when a = 7.0 and b = -2.0', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
          });
    });
});