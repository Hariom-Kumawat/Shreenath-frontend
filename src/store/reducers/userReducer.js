import {
  AUTH_ERROR,
  AUTH_LOADING,
  FORGET_PASSWORD_SUCCESS,
  LOGGED_USER_DETAILS,
  LOGIN_SUCCESSFULLY,
  NEW_PASSWORD,
  VERIFY_OTP_SUCCESS
} from "../types";

const initialState = {
  loading: false,
  user: null,
  error: null,
  successMessage: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return { ...state, loading: true, error: null };


    case LOGGED_USER_DETAILS:
      return { ...state, user: action.payload, loading: false };

    case LOGIN_SUCCESSFULLY:
      return { ...state, user: action.payload, loading: false };

    case FORGET_PASSWORD_SUCCESS:
      return { ...state, loading: false, successMessage: action.payload };

    case VERIFY_OTP_SUCCESS:
      return { ...state, loading: false, successMessage: action.payload };

    case NEW_PASSWORD:
      return { ...state, loading: false, successMessage: action.payload };

    case AUTH_ERROR:
      return { ...state, loading: false, error: action.payload }

    default:
      return state;
  }
};

export default userReducer;
