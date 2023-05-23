import * as AppTypes from '../types/AppTypes';

const initialState = {
  studentName: '',
  studentEmail: '',
  studentPhone: '',
  studentAddress: '',
  studentImage: '',
  isStudentName: true,
  isStudentEmail: true,
  isStudentPhone: true,
  isStudentAddress: true,
  isStudentImage: true,
  studentList: [],
  isLoading: false,
  isStudentEditPopUpShow: false,

  isSnackbarOpen: false,
  snackbarBody: {
    snackbarMessage: '',
    snackbarSeverity: 'success',
    snackbarAutoHideDuration: 5000,
  },

  events:[],

  userInfo:null,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppTypes.SET_STUDENTS:
      return {
        ...state,
        studentList: action.payload,
      };
    case AppTypes.SET_STUDENT_NAME:
      return {
        ...state,
        studentName: action.payload,
      };
    case AppTypes.SET_STUDENT_EMAIL:
      return {
        ...state,
        studentEmail: action.payload,
      };
    case AppTypes.SET_STUDENT_PHONE:
      return {
        ...state,
        studentPhone: action.payload,
      };
    case AppTypes.SET_STUDENT_ADDRESS:
      return {
        ...state,
        studentAddress: action.payload,
      };
    case AppTypes.SET_STUDENT_IMAGE:
      return {
        ...state,
        studentImage: action.payload,
      };
    case AppTypes.VALID_STUDENT_NAME:
      return {
        ...state,
        isStudentName: action.payload,
      };
    case AppTypes.VALID_STUDENT_EMAIL:
      return {
        ...state,
        isStudentEmail: action.payload,
      };
    case AppTypes.VALID_STUDENT_PHONE:
      return {
        ...state,
        isStudentPhone: action.payload,
      };
    case AppTypes.VALID_STUDENT_ADDRESS:
      return {
        ...state,
        isStudentAddress: action.payload,
      };
    case AppTypes.VALID_STUDENT_IMAGE:
      return {
        ...state,
        isStudentImage: action.payload,
      };
    case AppTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case AppTypes.SET_STUDENT_EDIT_POPUP:
      return {
        ...state,
        isStudentEditPopUpShow: action.payload,
      };
    case AppTypes.SET_OPEN_SNACKBAR:
      return {
        ...state,
        isSnackbarOpen: action.payload,
      };

    case AppTypes.SET_SNACKBAR_MESSAGE:
      return {
        ...state,
        snackbarBody: action.payload,
      };

    case AppTypes.CLEAR_STUDENT_DETAILS:
      return {
        ...state,
        studentName: '',
        studentEmail: '',
        studentPhone: '',
        studentAddress: '',
        studentImage: '',
        isStudentName: true,
        isStudentEmail: true,
        isStudentPhone: true,
        isStudentAddress: true,
        isStudentImage: true,
      };

    case AppTypes.SET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };

    case AppTypes.UPDATE_EVENT:
      return {
        ...state,
        events: action.payload,
      };

    case AppTypes.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };

    default:
      return state;
  }
};

export default AppReducer;
