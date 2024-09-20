const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const URL = 'http://localhost:7865';

  const testCases = [
    { path: '/', expectedStatus: 200, expectedBody: 'Welcome to the payment system' },
    { path: '/cart/47', expectedStatus: 200, expectedBody: 'Payment methods for cart 47' },
    { path: '/cart/-47', expectedStatus: 404 },
    { path: '/cart/d200-44a5-9de6', expectedStatus: 404 }
  ];

  testCases.forEach(({ path, expectedStatus, expectedBody }) => {
    it(`GET ${path} returns correct response`, (final) => {
      request.get(`${URL}${path}`, (_err, res, body) => {
        expect(res.statusCode).to.equal(expectedStatus);
        if (expectedBody) expect(body).to.equal(expectedBody);
        final();
      });
    });
  });

  describe('GET /available_payments JSON string', () => {
    it('Responds with 200 and correct JSON string', done => request({ url: 'http://localhost:7865/available_payments', method: 'GET' }, (err, re, body) => { expect(re.statusCode).to.equal(200); expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}'); done(); }));
  });

  describe('GET /available_payments JSON parsed', () => {
    it('Responds with 200 and correct JSON object when parsed', done => request({ url: 'http://localhost:7865/available_payments', method: 'GET' }, (err, re, body) => { expect(re.statusCode).to.equal(200); const bodyParsed = JSON.parse(body); const referenceBody = { payment_methods: { credit_cards: true, paypal: false } }; expect(bodyParsed).to.deep.equal(referenceBody); done(); }));
  });

  describe('POST /login with body', () => {
    it('Responds with 200 and correct name Sylvester', done => request({ url: 'http://localhost:7865/login', method: 'POST', json: { userName: 'Sylvester' } }, (err, re, body) => { expect(re.statusCode).to.equal(200); expect(body).to.equal('Welcome Sylvester'); done(); }));
  });

  describe('POST /login with no body', () => {
    it('Responds with 200 and correct name Undefined', done => request({ url: 'http://localhost:7865/login', method: 'POST' }, (err, re, body) => { expect(re.statusCode).to.equal(200); expect(body).to.equal('Welcome undefined'); done(); }));
  });
});