import { cloneDeep } from 'lodash';
import * as CartTypes from '../types/CartTypes';

const initialState = {
  studentCart: [],
  isLoading: false,
  isError: false,
  isCartPopUpShow: false,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartTypes.CLEAR_REDUCER:
      return cloneDeep(initialState);
    case CartTypes.SET_CART:
      return {
        ...state,
        studentCart: action.payload,
      };
    case CartTypes.SET_CART_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case CartTypes.SET_CART_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    case CartTypes.SET_CART_POPUP_SHOW:
      return {
        ...state,
        isCartPopUpShow: action.payload,
      };
    default:
      return state;
  }
};
export default CartReducer;
