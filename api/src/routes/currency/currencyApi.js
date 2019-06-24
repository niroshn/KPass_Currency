import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import CurrencyService from './currencyService';

class CurrencyApi {
  constructor() {
    this.router = new Router({ mergeParams: true });
    this.router.get('/currency/info', this.info);
  }

  async info(req, res) {
    const baseCurrency = req.query.base || 'USD';
    const targetCurrency = req.query.target || 'CAD';
    // const waitTime = req.query.wait_time;
    // const amount = req.query.amount;
    const historyData = await CurrencyService.getHistoricalBestDate(baseCurrency, targetCurrency);
    const todayData = await CurrencyService.getTodayRates(baseCurrency, targetCurrency);
    const predictData = await CurrencyService.getPredictDate();
    const result = {
      baseCurrency,
      targetCurrency,
      todayTargetCurrency: todayData.targetRateToday,
      historyTargetCurrency: historyData.targetRate,
      bestPastDate: historyData.date,
      bestBuyDate: predictData.predictDate,
    };
    res.status(HttpStatus.OK).send(result);
  }
}

export default CurrencyApi;
