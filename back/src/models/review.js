import mongoose from 'mongoose';

const { Schema } = mongoose;
const ReviewSchema = new Schema({
  classCode: String, // 분류번호
  gameTitle: String, // 게임물명
  applicant: String, // 신청자
  date: Date, // 등급분류일자
  rating: String, // 등급
});

const Review = mongoose.model('Review', ReviewSchema);
export default Review;
