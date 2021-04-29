/*
 * Review saga
 */
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';

import { dateToString } from '../modules/date';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as reviewAPI from '../lib/api/review';

const CHANGE_FIELD = 'review/CHANGE_FIELD';

const [
  LIST_REVIEW_DATE,
  LIST_REVIEW_DATE_SUCCESS,
  LIST_REVIEW_DATE_FAILURE,
] = createRequestActionTypes('review/LIST_REVIEW_DATE');

const [
  LIST_REVIEW_KEYWORD,
  LIST_REVIEW_KEYWORD_SUCCESS,
  LIST_REVIEW_KEYWORD_FAILURE,
] = createRequestActionTypes('review/LIST_REVIEW_KEYWORD');

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const listReviewDate = createAction(
  LIST_REVIEW_DATE,
  ({ startdate, enddate, page, cancel, reject }) => ({
    startdate,
    enddate,
    page,
    cancel,
    reject,
  }),
);

export const listReviewKeyword = createAction(
  LIST_REVIEW_KEYWORD,
  ({ keyword, page, cancel, reject }) => ({
    keyword,
    page,
    cancel,
    reject,
  }),
);

const listReviewDateSaga = createRequestSaga(
  LIST_REVIEW_DATE,
  reviewAPI.listbydate,
);
const listReviewKeywordSaga = createRequestSaga(
  LIST_REVIEW_KEYWORD,
  reviewAPI.listbykeyword,
);

export function* reviewDateSaga() {
  yield takeLatest(LIST_REVIEW_DATE, listReviewDateSaga);
}

export function* reviewKeywordSaga() {
  yield takeLatest(LIST_REVIEW_KEYWORD, listReviewKeywordSaga);
}

const initialState = {
  // search
  keyword: '',
  startdate: '',
  enddate: '',
  // result
  currentpage: 0,
  lastpage: 0,
  review: null,
  error: null,
};

const review = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft[key] = value;
      }),
    [LIST_REVIEW_DATE_SUCCESS]: (state, { payload: review, meta: response }) =>
      produce(state, (draft) => {
        draft.review = review.map((item) => {
          item.date = dateToString(new Date(item.date));
          return item;
        });
        draft.startdate = response.headers['startdate'];
        draft.enddate = response.headers['enddate'];
        draft.currentpage = parseInt(response.headers['currentpage'], 10);
        draft.lastpage = parseInt(response.headers['lastpage'], 10);
      }),
    [LIST_REVIEW_DATE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [LIST_REVIEW_KEYWORD_SUCCESS]: (
      state,
      { payload: review, meta: response },
    ) =>
      produce(state, (draft) => {
        draft.review = review.map((item) => {
          item.date = dateToString(new Date(item.date));
          return item;
        });
        draft.keyword = decodeURI(response.headers['keyword']);
        draft.currentpage = parseInt(response.headers['currentpage'], 10);
        draft.lastpage = parseInt(response.headers['lastpage'], 10);
      }),
    [LIST_REVIEW_KEYWORD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default review;
