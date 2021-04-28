/*
 * Root reducer and saga
 */
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { all } from 'redux-saga/effects';
import loading from './loading';
import review, { reviewDateSaga, reviewKeywordSaga } from './review';
import option from './option';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  loading,
  review,
  option,
});

export function* rootSaga() {
  yield all([reviewDateSaga(), reviewKeywordSaga()]);
}

// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);
