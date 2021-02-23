import { USER_CONSTANTS } from "./_user.constants";
import { getToken } from "./_userService";

const initialState = getToken();

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_CONSTANTS.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.payload,
      };
    case USER_CONSTANTS.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        token: action.payload,
      };
    case USER_CONSTANTS.LOGIN_FAILURE:
      console.log("reducerLoginFailure", action.payload);
      return {
        error: action.payload.data.error,
      };
    case USER_CONSTANTS.LOGOUT:
      return {};
    case USER_CONSTANTS.REGISTER_REQUEST:
      return { registering: true };
    case USER_CONSTANTS.REGISTER_SUCCESS:
      return {};
    case USER_CONSTANTS.REGISTER_FAILURE:
      return { error: action.payload.data.error };
    default:
      return state;
  }
}
