// Core modules
import { Router } from 'express';

import CurrencyApi from './currency/currencyApi';

const currencyApi = new CurrencyApi();

const router = Router();

router.use('/', currencyApi.router);

export default router;
