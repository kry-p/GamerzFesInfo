/*
 * Review saga
 */
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';

import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as reviewAPI from '../lib/api/review';
import { dateToString } from '../modules/date';

// initial state (date)
// const startDate = new Date();
// startDate.setDate(startDate.getDate() - 6);
// const startDateString = dateToString(startDate);
// const endDateString = dateToString(new Date());

const CHANGE_FIELD = 'review/CHANGE_FIELD';

const [
  LIST_REVIEW,
  LIST_REVIEW_SUCCESS,
  LIST_REVIEW_FAILURE,
] = createRequestActionTypes('review/LIST_REVIEW');

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

// export const listReview = createAction(LIST_REVIEW);
export const listReviewDate = createAction(
  LIST_REVIEW,
  ({ startdate, enddate }) => ({ startdate, enddate }),
);

export const listReviewKeyword = createAction(LIST_REVIEW, ({ keyword }) => ({
  keyword,
}));

const listReviewDateSaga = createRequestSaga(LIST_REVIEW, reviewAPI.listbydate);
const listReviewKeywordSaga = createRequestSaga(
  LIST_REVIEW,
  reviewAPI.listbykeyword,
);

export function* reviewDateSaga() {
  yield takeLatest(LIST_REVIEW, listReviewDateSaga);
}

export function* reviewKeywordSaga() {
  yield takeLatest(LIST_REVIEW, listReviewKeywordSaga);
}

const initialState = {
  // search
  keyword: '',
  startdate: '',
  enddate: '',
  // result
  lastpage: 0,
  review: null,
  error: null,
};

const review = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[key] = value;
      }),
    [LIST_REVIEW_SUCCESS]: (state, { payload: review, meta: response }) => ({
      ...state,
      review,
      startdate: response.headers['startdate'],
      enddate: response.headers['enddate'],
      lastpage: parseInt(response.headers['lastpage'], 10),
    }),
    [LIST_REVIEW_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default review;
