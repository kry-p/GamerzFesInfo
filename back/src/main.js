import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import cron from 'node-cron';
import logger from './modules/winston';

import api from './api';
import getReviewData from './modules/review';

require('dotenv').config();

const app = new Koa();
const router = new Router();

const { PORT, MONGO_URI } = process.env;
const port = PORT || 4000;

// 새로운 심의정보를 받아옴
async function handleAsync() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  await getReviewData(today, today);
}

// connect to mongodb
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    logger.info('Server: Connected to MongoDB');
  })
  .catch((e) => {
    logger.error(e);
  });

// 10분 주기로 실행
cron.schedule('*/10 * * * *', async () => {
  logger.info('Schedule: Crawler runs every 10 min.');
  await handleAsync();
});

router.use('/api', api.routes());

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  logger.info(`Server: Listening to port ${port}`);
});
