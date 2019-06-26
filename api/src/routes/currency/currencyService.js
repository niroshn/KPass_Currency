import axios from 'axios';
import * as _ from 'lodash';
import moment from 'moment';

const BASE_URL = 'https://api.exchangeratesapi.io';
const LAST_DAYS = 25;
const ROUND_UP = 2;
const YEAR_OPERATION = 1;

class CurrencyService {
  static async getTodayRates(base, target) {
    try {
      const response = await axios.get(`${BASE_URL}/latest?base=${base}&symbols=${target}`);
      const { data } = response;
      return { targetRateToday: data.rates[`${target}`].toFixed(ROUND_UP) };
    } catch (error) {
      return error;
    }
  }

  static async getHistoricalBestDate(base, target) {
    try {
      const endDate = moment().format('YYYY-MM-DD');
      const startDate = moment()
        .subtract(LAST_DAYS, 'days')
        .format('YYYY-MM-DD');
      const response = await axios.get(`${BASE_URL}/history?start_at=${startDate}&end_at=${endDate}&base=${base}`);
      const { data } = response;
      const dateKeys = Object.keys(data.rates);
      const ratesArray = _.toArray(data.rates);
      const bestRate = _.maxBy(ratesArray, target);
      const bestRateDate = dateKeys[_.findIndex(ratesArray, bestRate)];
      return {
        date: bestRateDate,
        targetRate: bestRate,
      };
    } catch (error) {
      return error;
    }
  }

  static async getPredictDate(base, target, wait) {
    const todayLastYear = moment()
      .subtract(YEAR_OPERATION, 'years')
      .format('YYYY-MM-DD');
    const lastDayLastYear = moment()
      .add(wait, 'weeks')
      .subtract(YEAR_OPERATION, 'years')
      .format('YYYY-MM-DD');

    const response = await axios.get(`${BASE_URL}/history?start_at=${todayLastYear}&end_at=${lastDayLastYear}&base=${base}`);

    const { data } = response;
    const dateKeys = Object.keys(data.rates);
    const ratesArray = _.toArray(data.rates);
    const bestRate = _.maxBy(ratesArray, target);
    const bestRateDate = dateKeys[_.findIndex(ratesArray, bestRate)];
    const predictedDate = moment(bestRateDate)
      .add(YEAR_OPERATION, 'years')
      .format('YYYY-MM-DD');
    return {
      predictDate: predictedDate,
      bestRate: bestRate[target].toFixed(ROUND_UP),
    };
  }
}

export default CurrencyService;
