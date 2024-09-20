const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => consoleSpy = sinon.spy(console, 'log'));
  afterEach(() => consoleSpy.restore());

  const testCases = [
    { args: [100, 20], expected: 'The total is: 120' },
    { args: [10, 10], expected: 'The total is: 20' }
  ];

  testCases.forEach(({ args, expected }) => {
    it(`logs "${expected}" for (${args.join(', ')})`, () => {
      sendPaymentRequestToApi(...args);
      expect(consoleSpy.calledWith(expected)).to.be.true;
      expect(consoleSpy.calledOnce).to.be.true;
    });
  });
});