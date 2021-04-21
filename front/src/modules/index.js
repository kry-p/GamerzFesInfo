/*
 * Root reducer and saga
 */
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import review, { reviewDateSaga, reviewKeywordSaga } from './review';
import option from './option';

const rootReducer = combineReducers({
  loading,
  review,
  option,
});

export function* rootSaga() {
  yield all([reviewDateSaga(), reviewKeywordSaga()]);
}

export default rootReducer;
