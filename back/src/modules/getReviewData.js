import Review from '../models/review';
import getData from './crawl';

const reviewMaker = (title, applicant, date, rating, code) => {
  return {
    updateOne: {
      "filter": { title: title, applicant: applicant }, // 게임물명과 신청자가 일치하는 정보가 있으면
      "update": { // 아래 내용을 변경함
        $set: {
          $date: date,  // $가 없으면 타입캐스팅으로 인한 오류가 발생함
          rating: rating,
          code: code,
        },
      },
      "upsert": true,
    }, // prettier-ignore
  };
};

export default function getReviewData(startDate, endDate) {
  (async () => {
    const crawlResult = await getData(startDate, endDate);
    const bulkResult = [];

    // update 구문 구성
    crawlResult.forEach((review) => {
      bulkResult.push(
        reviewMaker(
          review.title,
          review.applicant,
          review.date,
          review.rating,
          review.code,
        ),
      );
    });

    // 일괄 삽입
    Review.bulkWrite(bulkResult);
  })();
}
