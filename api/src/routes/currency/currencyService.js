import axios from 'axios';
import * as _ from 'lodash';

const BASE_URL = 'https://api.exchangeratesapi.io';

class CurrencyService {
  static async getTodayRates(base, target) {
    try {
      const response = await axios.get(`${BASE_URL}/latest?base=${base}&symbols=${target}`);
      const { data } = response;
      return data;
    } catch (error) {
      return error;
    }
  }

  static async getHistoricalBestDate(base, target) {
    try {
      const response = await axios.get(`${BASE_URL}/history?start_at=2018-01-01&end_at=2018-09-01&base=${base}`);
      const { data } = response;
      const bestRate = _.maxBy(_.toArray(data.rates), 'RUB');
      const bestDate = _.findKey(data.rates, { USD: 1, RUB: bestRate.RUB });

      return {
        date: bestDate,
        baseRate: 1,
        targetRate: bestDate[target],
      };
    } catch (error) {
      return error;
    }
  }
}

export default CurrencyService;
