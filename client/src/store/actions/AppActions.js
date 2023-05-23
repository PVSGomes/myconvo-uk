import * as AppTypes from '../types/AppTypes';
import Api from '../../Api';

export const setLoading = (payload) => ({
  type: AppTypes.SET_LOADING,
  payload,
});

export const setSnackBarMessage = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: AppTypes.SET_SNACKBAR_MESSAGE,
      payload: payload,
    });
  };
};

export const setOpenSnackBar = (value, body) => {
  return async (dispatch) => {
    dispatch({
      type: AppTypes.SET_OPEN_SNACKBAR,
      payload: value,
    });
    dispatch(setSnackBarMessage(body));
  };
};

export const hideSnackBar = () => {
  return async (dispatch) => {
    dispatch({
      type: AppTypes.SET_OPEN_SNACKBAR,
      payload: false,
    });
    dispatch(
      setSnackBarMessage({
        snackbarMessage: '',
        snackbarSeverity: '',
        snackbarAutoHideDuration: 0,
      })
    );
  };
};

export const showEditStudentPopup = (value) => {
  return (dispatch) => {
    dispatch({
      type: AppTypes.SET_STUDENT_EDIT_POPUP,
      payload: value,
    });
  };
};

export const setStudents = (payload) => ({
  type: AppTypes.SET_STUDENTS,
  payload,
});

export const clearStudentDetails = () => {
  return async (dispatch) => {
    dispatch({
      type: AppTypes.CLEAR_STUDENT_DETAILS,
    });
  };
};

export const deleteStudent = (id) => {
  return (dispatch, getState) => {
    const { students } = getState().AppReducer;
    const newStudents = students.filter((item) => item.id !== id);
    dispatch(setStudents(newStudents));
  };
};

export const editStudent = (id) => {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    console.log('edit');
    dispatch(showEditStudentPopup(false));
    dispatch(setLoading(true));
  };
};

export const getStudents = () => {
  return async (dispatch) => {
    try {
      const response = await Api.get(`user/userType/student`);
      dispatch(setStudents(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createStudent = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      function generateAlphanumericWord(length) {
        const characters =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';

        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters[randomIndex];
        }

        return result;
      }

      const alphanumericWord = generateAlphanumericWord(10);
      console.log(alphanumericWord);
      const {
        studentName,
        studentEmail,
        studentPhone,
        studentAddress,
        studentImage,
        userInfo,
      } = getState().AppReducer;

      const body = {
        name: studentName,
        email: studentEmail,
        phoneNo: studentPhone,
        address: studentAddress,
        image: studentImage,
        userType: 'student',
        password: alphanumericWord,
        graduationId: userInfo._id,
      };

      console.log(body);

      await Api.post('user/createStudent', body);
      dispatch(clearStudentDetails());
      dispatch(getStudents());
      dispatch(setLoading(false));
      dispatch(
        setOpenSnackBar(true, {
          snackbarMessage: 'Successfully Student Created',
          snackbarSeverity: 'success',
          snackbarAutoHideDuration: 4000,
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
      dispatch(
        setOpenSnackBar(true, {
          snackbarMessage: 'Something went wrong',
          snackbarSeverity: 'error',
          snackbarAutoHideDuration: 5000,
        })
      );
    }
  };
};

export const setStudentValidation = (value, type) => {
  return (dispatch) => {
    switch (type) {
      case 'NAME':
        dispatch({
          type: AppTypes.VALID_STUDENT_NAME,
          payload: value,
        });
        break;

      case 'EMAIL':
        dispatch({
          type: AppTypes.VALID_STUDENT_EMAIL,
          payload: value,
        });
        break;

      case 'PHONE':
        dispatch({
          type: AppTypes.VALID_STUDENT_PHONE,
          payload: value,
        });
        break;

      case 'ADDRESS':
        dispatch({
          type: AppTypes.VALID_STUDENT_ADDRESS,
          payload: value,
        });
        break;

      case 'IMAGE':
        dispatch({
          type: AppTypes.VALID_STUDENT_IMAGE,
          payload: value,
        });
        break;

      default:
        break;
    }
  };
};

export const setStudentName = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: AppTypes.SET_STUDENT_NAME,
      payload: payload,
    });
    dispatch(setStudentValidation(true, 'NAME'));
  };
};

export const setStudentEmail = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: AppTypes.SET_STUDENT_EMAIL,
      payload: payload,
    });
    dispatch(setStudentValidation(true, 'EMAIL'));
  };
};

export const setStudentPhone = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: AppTypes.SET_STUDENT_PHONE,
      payload: payload,
    });
    dispatch(setStudentValidation(true, 'PHONE'));
  };
};

export const setStudentAddress = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: AppTypes.SET_STUDENT_ADDRESS,
      payload: payload,
    });
    dispatch(setStudentValidation(true, 'ADDRESS'));
  };
};
export const setStudentImage = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: AppTypes.SET_STUDENT_IMAGE,
      payload: payload,
    });
    dispatch(setStudentValidation(true, 'IMAGE'));
  };
};

export const setEvents = (type) => {
  return async (dispatch) => {
    try {
      const response = await Api.get(`user/userType/${type}`);
      dispatch({
        type: AppTypes.SET_EVENTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateEvent = (payload) => {
  return async (dispatch) => {
    try {
      console.log(payload);
      dispatch(setLoading(true));
      await Api.put(`user/${payload.id}`, {
        id: payload.id,
        isVerified: payload.type,
      });
      dispatch(setEvents('university'));
      dispatch(setLoading(false));
      dispatch(
        setOpenSnackBar(true, {
          snackbarMessage: 'Successfully Event Updated',
          snackbarSeverity: 'success',
          snackbarAutoHideDuration: 4000,
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
      dispatch(
        setOpenSnackBar(true, {
          snackbarMessage: 'Something went wrong',
          snackbarSeverity: 'error',
          snackbarAutoHideDuration: 5000,
        })
      );
    }
  };
};

export const setUserInfo = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: AppTypes.SET_USER_INFO,
      payload: payload,
    });
  };
};

export const clearUserInfo = () => {
  return async (dispatch) => {
    dispatch({
      type: AppTypes.SET_USER_INFO,
      payload: '',
    });
  };
};
