import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import HttpStatus from 'http-status-codes';
// Custom modules
import router from './routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Health Check / Root end-point
app.get('/', (req, res) => {
  res.status(HttpStatus.OK).send('Your function executed successfully!');
});
// Set Express router with API version prefix
app.use('/', router);

app.listen(process.env.PORT, () => console.log('Server is listening on port 3400'));

export default app;
