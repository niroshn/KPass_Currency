// Core modules
import { Router } from 'express';

// Custom modules
import HelloApi from './hello/helloApi';


const helloApi = new HelloApi();

const router = Router();

router.use('/', helloApi.router);

export default router;
