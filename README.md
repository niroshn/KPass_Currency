# KPass_Currency
## web app that helps users to find best possible time for converting money from one currency to another, using historical currency rates

## Getting Start

`git clone https://github.com/niroshn/KPass_Currency.git`

### BackEnd (API)

Run Development Environment 
- `cd api`
- `npm install`
- `npm start`

Use API

`GET http://localhost:3333/currency/info?base=USD&target=EUR&wait_time=2&amount=2340 HTTP/1.1`


### FrontEnd (Web)

Run Development Environment 
- `cd web`
- `npm install`
- `npm start`

Run ESLint
- `npm run eslint`

Run Unit Test
- `npm test`
Run Unit Test with Test Coverage
- `npm test -- --coverage`
Build Production Host fils
- `npm run build`

## Used technologies 

### BackEnd (API)
- Node LTS
- Express
- Jest
- Lodash
- momenetjs
- Axios
- Docker
- husky
- Eslint

### FrontEnd (Web)
- Reactjs
- Redux
- ReduxSaga
- Jest
- Material UI
- Redux Form
- momenetjs
- husky
- EsLint


### ToDo List
- [x] Finish Web Front End Using React, Redux, Saga 
- [x] Finish Back End API with Express JS 
- [x] 80% Plus unit test Coverage for BackEnd API ( Using Jest )
- [x] husky Configuration for Backend and Front End
- [x] ESlint Config and Fix issues ( Front End + Backend )
- [x] Basic Prediction Algorithm
- [x] ReadMe 
- [x] Dockerize Backend API
- [x] Host Demo ( front end application) using Github pages or AWS S3 Static Web hosting
- [x] Host Demo ( Back end API ) Using AWS
- [x] Demo Gif Animation 
- [ ] Add a Advaced Machine Learing Model for exchange rate predication
- [ ] One Click application setup using AWS Cloudfromation or anyother Tool
- [ ] 80% Plus unit test Coverage for Front end ( Using Jest, Enzyme )
- [ ] Continuous integration with travis ci

## Exchange API

 https://www.exchangeratesapi.io/ used for currency rates

 
 # Supported currencies
```
AUD, BGN, BRL, CAD, CHF, CNY, CZK, DKK, EUR, GBP, HKD, HRK, HUF, IDR, ILS, INR,
JPY, KRW, MXN, MYR, NOK, NZD, PHP, PLN, RON, RUB, SEK, SGD, THB, TRY, USD, ZAR
