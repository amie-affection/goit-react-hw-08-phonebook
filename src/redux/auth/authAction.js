import authType from "./authType";

/* LOGIN */
const loginStart = () => ({
  type: authType.LOGIN_START,
});

const loginSuccess = () => ({
  type: authType.LOGIN_SUCCESS,

  payload: {},
});

const loginFailure = (error) => ({
  type: authType.LOGIN_FAILURE,

  payload: { error },
});

/* REGISTER */
const registerStart = () => ({
  type: authType.REGISTER_START,
});

const registerSuccess = () => ({
  type: authType.REGISTER_SUCCESS,

  payload: {},
});

const registerFailure = (error) => ({
  type: authType.REGISTER_FAILURE,

  payload: { error },
});

/* LOGOUT */
const logoutStart = () => ({
  type: authType.LOGOUT_START,
});

const logoutSuccess = (idContactDelete) => ({
  type: authType.LOGOUT_SUCCESS,

  payload: { id: idContactDelete },
});

const logoutFailure = (error) => ({
  type: authType.LOGOUT_FAILURE,

  payload: { error },
});

export default {
  loginStart,
  loginSuccess,
  loginFailure,

  registerStart,
  registerSuccess,
  registerFailure,

  logoutStart,
  logoutSuccess,
  logoutFailure,
};
