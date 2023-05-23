import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import {
  createBlacklistFilter,
  createWhitelistFilter,
} from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['PackageReducer','AppReducer'],
  blacklist: ['PackageReducer',],
  debug: process.env.REACT_APP_ENV !== 'Production',
  transforms: [
    // createWhitelistFilter('AppReducer', ['userInfo']),
    createBlacklistFilter('PackageReducer', ['packages']),
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { store, persistor };
