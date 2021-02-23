import { USER_CONSTANTS } from "./_user.constants";

const initialState = {
  authenticated: false,
  requestInProgress: false,
  error: null,
  user: {
    username: null,
    token: null,
    exp: null,
  },
};

export function userReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case USER_CONSTANTS.ALREADY_AUTHENTICATED:
      return {
        authenticated: true,
        requestInProgress: false,
        error: null,
        user: {
          username: action.payload.username,
          token: action.payload.token,
          exp: action.payload.exp,
        },
      };
    case USER_CONSTANTS.LOGIN_REQUEST:
      return {
        authenticated: false,
        requestInProgress: true,
        error: null,
        user: {
          username: null,
          token: null,
          exp: null,
        },
      };
    case USER_CONSTANTS.LOGIN_SUCCESS:
      return {
        authenticated: true,
        requestInProgress: false,
        error: null,
        user: {
          username: action.payload.username,
          token: action.payload.token,
          exp: action.payload.exp,
        },
      };
    case USER_CONSTANTS.LOGIN_FAILURE:
      return {
        authenticated: false,
        requestInProgress: false,
        error: action.payload.error,
        user: {
          username: null,
          token: null,
          exp: null,
        },
      };
    case USER_CONSTANTS.LOGOUT:
      return {
        authenticated: false,
        requestInProgress: false,
        error: null,
        user: {
          username: null,
          token: null,
          exp: null,
        },
      };
    case USER_CONSTANTS.REGISTER_REQUEST:
      return {
        authenticated: false,
        requestInProgress: true,
        error: null,
        user: {
          username: null,
          token: null,
          exp: null,
        },
      };
    case USER_CONSTANTS.REGISTER_SUCCESS:
      return {
        authenticated: false,
        requestInProgress: false,
        error: null,
        user: {
          username: null,
          token: null,
          exp: null,
        },
      };
    case USER_CONSTANTS.REGISTER_FAILURE:
      return {
        authenticated: false,
        requestInProgress: false,
        error: action.payload.error,
        user: {
          username: null,
          token: null,
          exp: null,
        },
      };
    default:
      return state;
  }
}
