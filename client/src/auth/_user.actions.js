import { USER_CONSTANTS } from "./_user.constants";
import { userService } from "./_userService";

export const userActions = {
  login,
  logout,
  register,
  alreadyAuthenticated,
};

function login(dispatch, username, password) {
  loginRequest();

  userService.login({ username, password }).then(
    (token) => loginSuccess(token),
    (error) => loginFailure(error)
  );

  function loginRequest() {
    const action = { type: USER_CONSTANTS.LOGIN_REQUEST };
    return dispatch(action);
  }
  function loginSuccess(payload) {
    const action = { type: USER_CONSTANTS.LOGIN_SUCCESS, payload };
    return dispatch(action);
  }
  function loginFailure(error) {
    const action = { type: USER_CONSTANTS.LOGIN_FAILURE, payload: { error } };
    return dispatch(action);
  }
}

function logout(dispatch) {
  userService.logout();
  return dispatch({ type: USER_CONSTANTS.LOGOUT });
}

function register(dispatch, username, password) {
  registerRequest({ username, password });

  userService.register(username, password).then(
    (user) => registerSuccess(user),
    (error) => registerFailure(error)
  );

  function registerRequest(user) {
    return dispatch({ type: USER_CONSTANTS.REGISTER_REQUEST, payload: user });
  }
  function registerSuccess(user) {
    return dispatch({ type: USER_CONSTANTS.REGISTER_SUCCESS, payload: user });
  }
  function registerFailure(error) {
    return dispatch({ type: USER_CONSTANTS.REGISTER_FAILURE, payload: error });
  }
}

function alreadyAuthenticated(dispatch, payload) {
  const action = {
    type: USER_CONSTANTS.ALREADY_AUTHENTICATED,
    payload,
  };
  return dispatch(action);
}
