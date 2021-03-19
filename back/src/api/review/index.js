import Router from 'koa-router';
import * as reviewCtrl from './review.ctrl';

const review = new Router();

review.get('/list', reviewCtrl.list);

export default review;
