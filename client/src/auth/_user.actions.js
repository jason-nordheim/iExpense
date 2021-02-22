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
 * @param {Function} dispatch
 * @param {String} username
 * @param {String} password
 */
function login(dispatch, username, password) {
  const user = { username, password };
  loginRequest(dispatch, user);
  userService.login(username, password).then(
    (token) => loginSuccess(dispatch, token),
    (error) => loginFailure(dispatch, error)
  );

  function loginRequest(dispatch, user) {
    console.log("loginRequest", user);
    return dispatch({ type: USER_CONSTANTS.LOGIN_REQUEST, user });
  }
  function loginSuccess(dispatch, user) {
    console.log("loginSuccess", user);
    return dispatch({ type: USER_CONSTANTS.LOGIN_SUCCESS, user });
  }
  function loginFailure(dispact, error) {
    console.log("loginFailure", error);
    return dispatch({ type: USER_CONSTANTS.LOGIN_FAILURE, error });
  }
}

/**
 * Removes the token associated with the current user
 */
function logout(dispatch) {
  userService.logout();
  return dispatch({ type: USER_CONSTANTS.LOGOUT });
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
function register(dispatch, username, password) {
  registerRequest(dispatch, { username, password });
  userService.register(username, password).then(
    (user) => registerSuccess(dispatch, user),
    (error) => registerFailure(dispatch, error)
  );

  function registerRequest(dispatch, user) {
    console.log("registerRequest", user);
    return dispatch({ type: USER_CONSTANTS.REGISTER_REQUEST, user });
  }
  function registerSuccess(dispatch, user) {
    console.log("registerSuccess", user);
    return dispatch({ type: USER_CONSTANTS.REGISTER_SUCCESS, user });
  }
  function registerFailure(dispatch, error) {
    console.log("registerFailure", error);
    return dispatch({ type: USER_CONSTANTS.REGISTER_FAILURE, error });
  }
}
