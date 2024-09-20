const request = require('request');
const { expect } = require('chai');

describe("API integration test", () => {
  const URL = 'http://localhost:7865';

  const testCases = [
    {
      path: '/',
      expectedStatus: 200,
      expectedBody: 'Welcome to the payment system',
    },
    {
      path: '/cart/47',
      expectedStatus: 200,
      expectedBody: 'Payment methods for cart 47',
    },
    { path: '/cart/d2-44a5', expectedStatus: 404 },
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
});
