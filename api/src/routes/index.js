// Core modules
import { Router } from 'express';

// Custom modules
import HelloApi from './hello/helloApi';
import CurrencyApi from './currency/currencyApi';

const helloApi = new HelloApi();
const currencyApi = new CurrencyApi();

const router = Router();

router.use('/', helloApi.router);
router.use('/', currencyApi.router);

export default router;
