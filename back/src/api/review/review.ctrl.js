import Review from '../../models/review';

/*
    오늘의 심의결과 조회
    GET /api/review/gettoday
*/
export const getToday = async (ctx) => {};

/*
    전체 심의결과 조회
    GET /api/review/getall
*/
export const getAll = async (ctx) => {
  try {
    const review = await Review.find().exec();
    ctx.body = review;
  } catch (error) {
    ctx.throw(500, error);
  }
};

/*
    
    POST /api/review/insertOne
*/
export const insertOne = async (ctx) => {
  const { title, applicant, date, rating, code } = ctx.request.body;
  const review = new Review({
    title,
    applicant,
    date,
    rating,
    code,
  });
  try {
    await review.save();
    ctx.body = review;
  } catch (error) {
    ctx.throw(500, error);
  }
};
