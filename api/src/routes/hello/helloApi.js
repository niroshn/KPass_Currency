import { Router } from 'express';
import HttpStatus from 'http-status-codes';

class HelloApi {
  constructor() {
    this.router = new Router({ mergeParams: true });
    this.router.get('/hello', this.hello);
  }

  async hello(req, res) {
    res.status(HttpStatus.OK).send({ data: ['data1', 'data2', 'data3', 'data4', 'data5'] });
  }
}

export default HelloApi;
