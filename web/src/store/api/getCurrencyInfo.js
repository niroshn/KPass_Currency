import 'isomorphic-fetch';

const getCurrencyInfo = async data => {
  const { baseCurrency, waitingTime, targetCurrency, amount } = data;
  const response = await fetch(
    `http://localhost:3333/currency/info?base=${baseCurrency}&target=${targetCurrency}&wait_time=${waitingTime}&amount=${amount}`
  );
  if (!response.ok) {
    return { error: { code: response.status } };
  }
  const json = await response.json();
  return { data: json };
};

export default getCurrencyInfo;
