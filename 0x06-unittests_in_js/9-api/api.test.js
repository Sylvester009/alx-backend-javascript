const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  const testCases = [
    { path: '/', expectedStatus: 200, expectedBody: 'Welcome to the payment system' },
    { path: '/cart/47', expectedStatus: 200, expectedBody: 'Payment methods for cart 47' },
    { path: '/cart/-47', expectedStatus: 404 },
    { path: '/cart/d200-44a5-9de6', expectedStatus: 404 }
  ];

  testCases.forEach(({ path, expectedStatus, expectedBody }) => {
    it(`GET ${path} returns correct response`, (done) => {
      request.get(`${API_URL}${path}`, (_err, res, body) => {
        expect(res.statusCode).to.equal(expectedStatus);
        if (expectedBody) expect(body).to.equal(expectedBody);
        done();
      });
    });
  });
});