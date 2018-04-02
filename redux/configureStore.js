import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist'; // to persist and rehydrate a redux store.
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import users from './modules/user';

const middlewares = [thunk];

const persistConfig = {
  key: 'root',
  storage
};

const reducer = persistCombineReducers(persistConfig, {
  users
});

const configureStore = () => {
  let store = createStore(reducer, applyMiddleware(...middlewares));
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
