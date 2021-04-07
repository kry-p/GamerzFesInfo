import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as reviewAPI from '../lib/api/review';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_REVIEW,
  LIST_REVIEW_SUCCESS,
  LIST_REVIEW_FAILURE,
] = createRequestActionTypes('review/LIST_REVIEW');

// export const listReviews = createAction(
//   LIST_REVIEWS,
//   ({ startdate, enddate }) => ({ startdate, enddate }),
// );

export const listReview = createAction(LIST_REVIEW);

const listReviewSaga = createRequestSaga(LIST_REVIEW, reviewAPI.list);
export function* reviewSaga() {
  yield takeLatest(LIST_REVIEW, listReviewSaga);
}

const initialState = {
  review: null,
  error: null,
};

const review = handleActions(
  {
    [LIST_REVIEW_SUCCESS]: (state, { payload: review }) => ({
      ...state,
      review,
    }),
    [LIST_REVIEW_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default review;
