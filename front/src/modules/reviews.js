import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as reviewAPI from '../lib/api/reviews';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_REVIEWS,
  LIST_REVIEWS_SUCCESS,
  LIST_REVIEWS_FAILURE,
] = createRequestActionTypes('reviews/LIST_REVIEWS');

// export const listReviews = createAction(
//   LIST_REVIEWS,
//   ({ startdate, enddate }) => ({ startdate, enddate }),
// );

export const listReviews = createAction(LIST_REVIEWS);

const listReviewsSaga = createRequestSaga(LIST_REVIEWS, reviewAPI.list);
export function* reviewsSaga() {
  yield takeLatest(LIST_REVIEWS, listReviewsSaga);
}

const initialState = {
  reviews: null,
  error: null,
};

const reviews = handleActions(
  {
    [LIST_REVIEWS_SUCCESS]: (state, { payload: reviews }) => ({
      ...state,
      reviews,
    }),
    [LIST_REVIEWS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default reviews;
