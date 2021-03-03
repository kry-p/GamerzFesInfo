import Router from 'koa-router';
import * as reviewCtrl from './review.ctrl';

const review = new Router();

review.get('/gettoday', reviewCtrl.getToday);
review.get('/getall', reviewCtrl.getAll);

export default review;
