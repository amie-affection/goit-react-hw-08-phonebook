import { combineReducers } from "redux";

const tokenReducer = (state = null, action) => {
  switch (action.type) {
    case "auth/LOGIN_SUCCESS":
      return action.payload.token;

    case "auth/LOGOUT_SUCCESS":
      return null;

    default:
      return state;
  }
};

const isShowReducer = (state = true, action) => {
  switch (action.type) {
    case "auth/IS_SHOW":
      return !state;

    default:
      return state;
  }
};

export default combineReducers({
  token: tokenReducer,
  isShow: isShowReducer,
});
