import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import {
  counterReducer,
  loadingStatusReducer,
  outlineReducer,
  queryReducer,
  resultsReducer,
  // screenshotsReducer
}  from './search/search.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['']
};

const rootReducer = combineReducers({
  user: userReducer,
  results: resultsReducer,
  loadingStatus: loadingStatusReducer,
  outline: outlineReducer,
  query: queryReducer,
  counter: counterReducer
  // screenshots: screenshotsReducer
});

export default persistReducer(persistConfig, rootReducer);