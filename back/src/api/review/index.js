import Router from 'koa-router';
import * as reviewCtrl from './review.ctrl';

const review = new Router();

review.get('/gettoday', reviewCtrl.getToday);
review.get('/getall', reviewCtrl.getAll);
review.post('/insertone', reviewCtrl.insertOne);

export default review;
