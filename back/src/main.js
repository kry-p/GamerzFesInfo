require('dotenv').config();

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

import api from './api';
import getReviewData from './modules/getReviewData';

const app = new Koa();
const router = new Router();

const { PORT, MONGO_URI } = process.env;

// connect to mongodb
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log('Connected to MongoDB');
    getReviewData(new Date(2021, 2 - 1, 1), new Date(2021, 2 - 1, 15));
  })
  .catch((e) => {
    console.error(e);
  });

router.use('/api', api.routes());

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to port %d', port);
});
