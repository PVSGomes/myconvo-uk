import * as CartTypes from '../types/CartTypes';

export const setCart = (payload) => {
  return (dispatch) => {
    dispatch({
      type: CartTypes.SET_CART,
      payload,
    });
  };
};

export const setCartLoading = (payload) => {
  return (dispatch) => {
    dispatch({
      type: CartTypes.SET_CART_LOADING,
      payload,
    });
  };
};

export const setCartError = (payload) => {
  return (dispatch) => {
    dispatch({
      type: CartTypes.SET_CART_ERROR,
      payload,
    });
  };
};

export const clearCart = () => {
  return (dispatch) => {
    dispatch({
      type: CartTypes.CLEAR_REDUCER,
    });
  };
};

export const setCartPopUpShow = (payload) => {
  return (dispatch) => {
    dispatch({
      type: CartTypes.SET_CART_POPUP_SHOW,
      payload,
    });
  };
};
