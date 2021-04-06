import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import reviews, { reviewsSaga } from './reviews';

const rootReducer = combineReducers({
  loading,
  reviews,
});

export function* rootSaga() {
  yield all([reviewsSaga()]);
}

export default rootReducer;
