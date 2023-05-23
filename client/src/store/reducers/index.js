import { combineReducers } from 'redux';

import PackageReducer from './PackageReducer';
import CartReducer from './CartReducer';
import AppReducer from './AppReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  PackageReducer,
  CartReducer,
  AppReducer,
});

export default rootReducer;
