import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import CurrencyService from './currencyService';

class CurrencyApi {
  constructor() {
    this.router = new Router({ mergeParams: true });
    this.router.get('/history', this.history);
    this.router.get('/today', this.today);
    this.router.get('/predict', this.predict);
  }

  async history(req, res) {
    const result = await CurrencyService.getHistoricalBestDate('USD', 'BGP');
    res.status(HttpStatus.OK).send(result);
  }

  async today(req, res) {
    const result = await CurrencyService.getTodayRates('USD', 'BGP');
    res.status(HttpStatus.OK).send(result);
  }

  async predict(req, res) {
    res.status(HttpStatus.OK).send({ data: ['predict', 'data2', 'data3', 'data4', 'data5'] });
  }
}

export default CurrencyApi;
