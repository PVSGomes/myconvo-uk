import Api from '../../Api';
import * as PackageTypes from '../types/PackageTypes';
import * as AppActions from "./AppActions";

export const setPackages = (payload) => ({
  type: PackageTypes.SET_PACKAGE,
  payload,
});

export const clearPackageDetails = () => {
  return async (dispatch) => {
    dispatch({
      type: PackageTypes.CLEAR_PACKAGE_DETAILS,
    });
  };
};

export const deletePackage = (id) => {
  return (dispatch, getState) => {
    const { packages } = getState().PackageReducer;
    const newPackages = packages.filter((item) => item.id !== id);
    dispatch(setPackages(newPackages));
  };
};

export const getPackages = () => {
  return async (dispatch) => {
    try {
      const response = await Api.get('package/');
      dispatch(setPackages(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createPackage = () => {
  return async (dispatch, getState) => {
    try {
      const { packageTitle, packageDescription, packagePrice, packageImage } =
        getState().PackageReducer;

      const body = {
        title: packageTitle,
        description: packageDescription,
        price: packagePrice,
        image: packageImage,
      };
      await Api.post('package', body);
      dispatch(clearPackageDetails());
      dispatch(getPackages());
      dispatch(
        AppActions.setOpenSnackBar(true, {
          snackbarMessage: 'Successfully Package Created',
          snackbarSeverity: 'success',
          snackbarAutoHideDuration: 5000,
        })
      );
    } catch (error) {
      dispatch(
        AppActions.setOpenSnackBar(true, {
          snackbarMessage: 'Something went wrong',
          snackbarSeverity: 'error',
          snackbarAutoHideDuration: 5000,
        })
      );
      console.log(error);
    }
  };
};

export const setPackageValidation = (value, type) => {
  return (dispatch) => {
    switch (type) {
      case 'TITLE':
        dispatch({
          type: PackageTypes.SET_TITLE_VALIDATION,
          payload: value,
        });
        break;

      case 'DESCRIPTION':
        dispatch({
          type: PackageTypes.SET_DESCRIPTION_VALIDATION,
          payload: value,
        });
        break;

      case 'PRICE':
        dispatch({
          type: PackageTypes.SET_PRICE_VALIDATION,
          payload: value,
        });
        break;

      case 'IMAGE':
        dispatch({
          type: PackageTypes.SET_IMAGE_VALIDATION,
          payload: value,
        });
        break;

      default:
        break;
    }
  };
};

export const setPackageTitle = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: PackageTypes.SET_PACKAGE_TITLE,
      payload: payload,
    });
    dispatch(setPackageValidation(true, 'TITLE'));
  };
};

export const setPackageDescription = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: PackageTypes.SET_PACKAGE_DESCRIPTION,
      payload: payload,
    });
    dispatch(setPackageValidation(true, 'DESCRIPTION'));
  };
};

export const setPackagePrice = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: PackageTypes.SET_PACKAGE_PRICE,
      payload: payload,
    });
    dispatch(setPackageValidation(true, 'PRICE'));
  };
};
export const setPackageImage = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: PackageTypes.SET_PACKAGE_IMAGE,
      payload: payload,
    });
    dispatch(setPackageValidation(true, 'IMAGE'));
  };
};
