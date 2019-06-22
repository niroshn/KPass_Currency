import HttpStatus from 'http-status-codes';
import request from 'supertest';
import { app } from '../../../index';


describe('routes: get /hello', () => {
  test('should respond with success status', async () => {
    const response = await request(app)
      .get('/hello')
      .set('Accept', 'application/json');
    expect(response.status).toEqual(HttpStatus.OK);
    expect(response.body).toBeDefined();
  });
});
