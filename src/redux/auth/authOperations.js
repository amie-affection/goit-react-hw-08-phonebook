import api from "../../services/api";
import authAction from "./authAction";

const loginOperation = () => (dispatch) => {
  dispatch(authAction.loginStart());

  api
    .login()
    .then(({ data }) => console.log(data))
    .catch((error) => dispatch(authAction.loginFailure(error)));
};

const registerOperation = (registerObject) => (dispatch) => {
  dispatch(authAction.registerStart());
  console.log(registerObject);

  api
    .register(registerObject)
    .then(({ data }) => console.log(data))
    .catch((error) => dispatch(authAction.registerFailure(error)));
};

const logoutOperation = () => (dispatch) => {
  dispatch(authAction.logoutStart());

  api
    .logout()
    .then(({ data }) => console.log(data))
    .catch((error) => dispatch(authAction.logoutFailure(error)));
};

export default {
  loginOperation,
  registerOperation,
  logoutOperation,
};
