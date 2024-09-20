const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('calls console.log with the correct arguments', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const calNumberStub = sinon.stub(Utils, 'calculateNumber');

    calNumberStub.returns(10);
    sendPaymentRequestToApi(100, 20);

    expect(calNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calNumberStub.callCount).to.be.equal(1);
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    expect(consoleSpy.callCount).to.be.equal(1);

    calNumberStub.restore();
    consoleSpy.restore();
  });
});