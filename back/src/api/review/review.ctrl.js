import Review from '../../models/review';
import { stringToDate } from '../../modules/date';

/*
    심의결과 조회 (날짜 기준, 페이지당 20개씩)
    GET /api/review/list
*/
export const list = async (ctx) => {
  const page = parseInt(ctx.query.page || '1', 20); // 입력값이 없을 경우 기본 페이지는 1
  let startDate = stringToDate(ctx.query.startdate);
  let endDate = stringToDate(ctx.query.enddate);

  // 둘 중 하나 이상 비어 있거나 시작일자가 종료일자를 역전하면 오류로 간주, 최근 일주일 표시
  if (startDate === null || endDate === null || startDate > endDate) {
    endDate = new Date();
    startDate = new Date();
    endDate.setHours(0, 0, 0, 0);
    startDate.setHours(0, 0, 0, 0);
    startDate.setDate(startDate.getDate() - 6);
  }

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  try {
    const review = await Review.find({
      date: {
        '$gte': startDate,
        '$lte': endDate,
      },
    }) // startDate 이상 endDate 이하
      .sort({ date: -1 }) // 날짜 역순
      .limit(20)
      .skip((page - 1) * 20)
      .exec(); // prettier-ignore
    const reviewCount = await Review.countDocuments().exec();
    ctx.set('LastPage', Math.ceil(reviewCount / 20));
    ctx.body = review;
  } catch (error) {
    ctx.throw(500, error);
  }
};
