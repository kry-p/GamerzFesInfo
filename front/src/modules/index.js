import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import review, { reviewSaga } from './review';

const rootReducer = combineReducers({
  loading,
  review,
});

export function* rootSaga() {
  yield all([reviewSaga()]);
}

export default rootReducer;
