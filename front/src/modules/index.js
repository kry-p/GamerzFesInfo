/*
 * Root reducer and saga
 */
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import review, { reviewDateSaga, reviewKeywordSaga } from './review';

const rootReducer = combineReducers({
  loading,
  review,
});

export function* rootSaga() {
  yield all([reviewDateSaga(), reviewKeywordSaga()]);
}

export default rootReducer;
