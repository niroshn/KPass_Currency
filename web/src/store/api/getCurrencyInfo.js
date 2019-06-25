import 'isomorphic-fetch';

const getCurrencyInfo = async () => {
  const response = await fetch(`http://localhost:5555/currency/info?base=USD&target=EUR&wait_time=2&amount=2340`);
  if (!response.ok) {
    return { error: { code: response.status } };
  }
  const json = await response.json();
  return { data: json };
};

export default getCurrencyInfo;
