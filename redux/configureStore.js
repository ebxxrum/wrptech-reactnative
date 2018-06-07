import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist'; // to persist and rehydrate a redux store.
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import user from './modules/user';
import weeks from './modules/weeks';
import weekReport from './modules/weekReport';
import calendar from './modules/calendar';

const middlewares = [thunk];

const persistConfig = {
  key: 'primary', // ERROR: Unexpected keys found in previous state by reducer => change key name
  storage
};

const reducer = persistCombineReducers(persistConfig, {
  user,
  weekReport,
  calendar
});

const configureStore = () => {
  let store = createStore(reducer, applyMiddleware(...middlewares));
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
