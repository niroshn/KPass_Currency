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
    const { amount } = req.query;
    const wait = req.query.wait_time;
    const historyData = await CurrencyService.getHistoricalBestDate(baseCurrency, targetCurrency);
    const todayData = await CurrencyService.getTodayRates(baseCurrency, targetCurrency);
    const predictData = await CurrencyService.getPredictDate(baseCurrency, targetCurrency, wait);
    const result = {
      baseCurrency,
      targetCurrency,
      amount,
      todayTargetCurrency: todayData.targetRateToday,
      historyTargetCurrency: historyData.targetRate,
      bestTargetCurrency: predictData.bestTargetCurrency,
      bestLastDate: historyData.date,
      bestBuyDate: predictData.predictDate,
      bestBuyRate: predictData.bestRate,
    };
    res.status(HttpStatus.OK).send(result);
  }
}

export default CurrencyApi;
