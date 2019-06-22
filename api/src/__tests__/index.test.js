import request from 'supertest';
import HttpStatus from 'http-status-codes';
import { app } from '../index';

describe('app test', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(HttpStatus.OK);
  });
});
