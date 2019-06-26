class CurrencyService {
  static async getTodayRates(base, target) {
    return { base, target, targetRateToday: 20.99 };
  }
  static async getHistoricalBestDate(base, target) {
    return {
      base,
      target,
      date: '2018-01-02',
      targetRate: 23.95,
    };
  }
  static async getPredictDate(base, target, wait) {
    return {
      base,
      target,
      wait,
      predictDate: '2019-09-25',
      bestRate: 100.12,
    };
  }
}

export default CurrencyService;
