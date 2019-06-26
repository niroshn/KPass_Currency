import HttpStatus from 'http-status-codes';
import request from 'supertest';
import { app } from '../../../index';

jest.mock('../__mocks__/currencyService');

describe('routes: get /currency/info', () => {
  test('should respond with success status', async () => {
    const response = await request(app)
      .get('/currency/info')
      .set('Accept', 'application/json');
    expect(response.status).toEqual(HttpStatus.OK);
    expect(response.body).toBeDefined();
  });
});
