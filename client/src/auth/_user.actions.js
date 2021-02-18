import { USER_CONSTANTS } from "./_user.constants";
import { userService } from "./_userService";
/**
 * action creators related to users
 */
export const USER_ACTIONS = {
  login,
  logout,
  register,
};

/**
 * 1) dispatches `LOGIN_REQUEST` action via `dispatch(loginRequest({ username }))`
 * 2) calls async task `userService.login(username, password)`
 * 3) dispatches result of `userService.login(username, password)`
 *     -> Success: dispatches a `LOGIN_SUCCESS` with `dispatch(loginSuccess(user));`
 *     -> Failure:  dispatches a `LOGIN_FAILURE` action with `dispatch(loginFailure(error));`
 * @param {String} username
 * @param {String} password
 */
function login(username, password) {
  return (dispatch) => {
    dispatch(loginRequest({ username, password }));
    userService.login(username, password).then(
      (token) => dispatch(loginSuccess(token)),
      (error) => dispatch(loginFailure(error))
    );
  };
  function loginRequest(user) {
    return { type: USER_CONSTANTS.LOGIN_REQUEST, user };
  }
  function loginSuccess(user) {
    return { type: USER_CONSTANTS.LOGIN_SUCCESS, user };
  }
  function loginFailure(error) {
    return { type: USER_CONSTANTS.LOGIN_FAILURE, error };
  }
}

/**
 * Removes the token associated with the current user
 */
function logout() {
  userService.logout();
  return { type: USER_CONSTANTS.LOGOUT };
}

/**
 * 1) dispatches `REGISTER_REQUEST` action via `dispatch(registerRequest({ username, password }))`
 * 2) calls async task `userService.register(username, password)`
 * 3) dispatches result of `userService.register(username, password)`
 *     -> Success: dispatches a `REGISTER_SUCCESS` with `dispatch(registerSuccess(user));`
 *     -> Failure:  dispatches a `REGISTER_FAILURE` action with `dispatch(registerFailure(error));`
 * @param {String} username
 * @param {String} password
 */
function register(username, password) {
  return (dispatch) => {
    dispatch(registerRequest({ username, password }));
    userService.register(username, password).then(
      (user) => dispatch(registerSuccess(user)),
      (error) => dispatch(registerFailure(error))
    );
  };
  function registerRequest(user) {
    return { type: USER_CONSTANTS.REGISTER_REQUEST, user };
  }
  function registerSuccess(user) {
    return { type: USER_CONSTANTS.REGISTER_SUCCESS, user };
  }
  function registerFailure(error) {
    return { type: USER_CONSTANTS.REGISTER_FAILURE, error };
  }
}
