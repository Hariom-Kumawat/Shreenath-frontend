import {
  AUTH_ERROR,
  AUTH_LOADING,
  FORGET_PASSWORD_SUCCESS,
  LOGGED_USER_DETAILS,
  LOGIN_SUCCESSFULLY,
  NEW_PASSWORD,
  VERIFY_OTP_SUCCESS
} from "../types";

export const saveUserDetails = (payload) => {
  return {
    type: LOGGED_USER_DETAILS,
    payload,
  };
};

// login action 
export const loginUser = (mobileNumber, password) => async (dispatch) => {

  dispatch({ type: AUTH_LOADING })

  setTimeout(() => {
    if (mobileNumber === '8890486150' && password === '1234567') {
      const userData = {
        mobileNumber,
        token: 'mock token',
        name: 'hariom'
      }

      // dispatch(saveUserDetails(userData))
      dispatch({ type: LOGIN_SUCCESSFULLY, payload: 'login successfull' })
    } else {
      dispatch({ type: AUTH_ERROR, payload: 'invalid number or password' })
    }
  }, 1000);

}



// forget password action
export const forgetPassword = (mobileNumber) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_LOADING })

    setTimeout(() => {
      if (mobileNumber === '8890486150') {
        dispatch({
          type: FORGET_PASSWORD_SUCCESS,
          payload: 'otp sent to your email'              // with actual api of backend
        })
      } else {
        dispatch({ type: AUTH_ERROR, payload: 'mobileNumber not found' })
      }
    }, 1000)
  } catch (error) {
    dispatch(
      {
        type: AUTH_ERROR,
        payload: 'error sending otp'
      }
    )
  }
}

// verify OTP action

export const verifyOTP = (otp) => async (dispatch) => {

  try {
    dispatch({ type: AUTH_LOADING })

    setTimeout(() => {
      if (otp === '1234') {
        dispatch({
          type: VERIFY_OTP_SUCCESS,
          payload: 'OTP verify successfully'
        })
      } else {
        dispatch({
          type: AUTH_ERROR,
          payload: 'invalid OTP'
        })
      }
    }, 1000)
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'error verifying OTP'
    })
  }
}

export const setNewPassword = (newPassword) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_LOADING })

    setTimeout(() => {
      dispatch({
        type: NEW_PASSWORD,
        payload: 'password set successfully '
      })
    }, 1000)
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'error set new password'
    })
  }
}


