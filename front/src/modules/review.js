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
const startDate = new Date();
startDate.setDate(startDate.getDate() - 6);
const startDateString = dateToString(startDate);
const endDateString = dateToString(new Date());

const CHANGE_FIELD = 'review/CHANGE_FIELD';

const [
  LIST_REVIEW,
  LIST_REVIEW_SUCCESS,
  LIST_REVIEW_FAILURE,
] = createRequestActionTypes('review/LIST_REVIEW');

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value }),
);
export const listReview = createAction(LIST_REVIEW);

const listReviewSaga = createRequestSaga(LIST_REVIEW, reviewAPI.list);
export function* reviewSaga() {
  yield takeLatest(LIST_REVIEW, listReviewSaga);
}

const initialState = {
  search: {
    keyword: '게임명',
    startdate: startDateString,
    enddate: endDateString,
  },
  review: null,
  error: null,
};

const review = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
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
