import axios from 'axios';
import * as _ from 'lodash';
import moment from 'moment';

const BASE_URL = 'https://api.exchangeratesapi.io';
const LAST_DAYS = 25;

class CurrencyService {
  static async getTodayRates(base, target) {
    try {
      const response = await axios.get(`${BASE_URL}/latest?base=${base}&symbols=${target}`);
      const { data } = response;
      return { targetRateToday: data.rates[`${target}`] };
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
      const bestRate = _.maxBy(_.toArray(data.rates), target);
      const bestDate = _.findKey(data.rates, { USD: 1, RUB: bestRate.RUB });
      return {
        date: bestDate,
        baseRate: 1,
        targetRate: bestRate[`${target}`],
      };
    } catch (error) {
      return error;
    }
  }

  static async getPredictDate() {
    return {
      predictDate: '2019-08-03',
    };
  }
}

export default CurrencyService;
