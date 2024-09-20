const request = require('request'), { expect } = require('chai');

describe('Integration Testing', () => {
  describe('GET /', () => {
    it('Code: 200 | Body: Welcome to the payment system', done => request({ url: 'http://localhost:7865', method: 'GET' }, (e, r, b) => { expect(r.statusCode).to.equal(200); expect(b).to.equal('Welcome to the payment system'); done(); }));
  });

  describe('GET /cart/12', () => {
    it('Responds with 200 and id 12 in msg', done => request({ url: 'http://localhost:7865/cart/12', method: 'GET' }, (e, r, b) => { expect(r.statusCode).to.equal(200); expect(b).to.equal('Payment methods for cart 12'); done(); }));
  });

  describe('GET /cart/1', () => {
    it('Responds with 200 and id 1 in msg', done => request({ url: 'http://localhost:7865/cart/1', method: 'GET' }, (e, r, b) => { expect(r.statusCode).to.equal(200); expect(b).to.equal('Payment methods for cart 1'); done(); }));
  });

  describe('GET /cart/123', () => {
    it('Responds with 200 and id 12 in msg', done => request({ url: 'http://localhost:7865/cart/123', method: 'GET' }, (e, r, b) => { expect(r.statusCode).to.equal(200); expect(b).to.equal('Payment methods for cart 123'); done(); }));
  });

  describe('GET /cart/a12', () => {
    it('Responds with 404', done => request({ url: 'http://localhost:7865/cart/a12', method: 'GET' }, (e, r, b) => { expect(r.statusCode).to.equal(404); done(); }));
  });

  describe('GET /cart/a12b', () => {
    it('Responds with 404', done => request({ url: 'http://localhost:7865/cart/a12b', method: 'GET' }, (e, r, b) => { expect(r.statusCode).to.equal(404); done(); }));
  });

  describe('GET /cart/12b', () => {
    it('Responds with 404', done => request({ url: 'http://localhost:7865/cart/12b', method: 'GET' }, (e, r, b) => { expect(r.statusCode).to.equal(404); done(); }));
  });

  describe('GET /cart/hello', () => {
    it('Responds with 404', done => request({ url: 'http://localhost:7865/cart/hello', method: 'GET' }, (e, r, b) => { expect(r.statusCode).to.equal(404); done(); }));
  });

  describe('GET /available_payments JSON string', () => {
    it('Responds with 200 and correct JSON string', done => request({ url: 'http://localhost:7865/available_payments', method: 'GET' }, (e, r, b) => { expect(r.statusCode).to.equal(200); expect(b).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}'); done(); }));
  });

  describe('GET /available_payments JSON parsed', () => {
    it('Responds with 200 and correct JSON object when parsed', done => request({ url: 'http://localhost:7865/available_payments', method: 'GET' }, (e, r, b) => { expect(r.statusCode).to.equal(200); const bodyParsed = JSON.parse(b); const referenceBody = { payment_methods: { credit_cards: true, paypal: false } }; expect(bodyParsed).to.deep.equal(referenceBody); done(); }));
  });

  describe('POST /login with body', () => {
    it('Responds with 200 and correct name Betty', done => request({ url: 'http://localhost:7865/login', method: 'POST', json: { userName: 'Betty' } }, (e, r, b) => { expect(r.statusCode).to.equal(200); expect(b).to.equal('Welcome Betty'); done(); }));
  });

  describe('POST /login with no body', () => {
    it('Responds with 200 and correct name Undefined', done => request({ url: 'http://localhost:7865/login', method: 'POST' }, (e, r, b) => { expect(r.statusCode).to.equal(200); expect(b).to.equal('Welcome undefined'); done(); }));
  });
});