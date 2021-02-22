import { USER_CONSTANTS } from "./_user.constants";
import { getToken } from "./_userService";

let token = getToken();
const initialState = token ? { token: token, loggedIn: false } : {};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_CONSTANTS.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case USER_CONSTANTS.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case USER_CONSTANTS.LOGIN_FAILURE:
      return {};
    case USER_CONSTANTS.LOGOUT:
      return {};
    case USER_CONSTANTS.REGISTER_REQUEST:
      return { registering: true };
    case USER_CONSTANTS.REGISTER_SUCCESS:
      return {};
    case USER_CONSTANTS.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
