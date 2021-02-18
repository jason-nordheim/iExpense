import { API_CONFIG, LOCAL_STORAGE_KEY } from "./_config.dev";

const { Routes } = API_CONFIG;
export const userService = {
  login: loginUser,
  logout: logoutUser,
  register: registerUser,
  whoAmI: () => {},
};

/**

 * 1) dispatches `LOGIN_REQUEST` action via `dispatch(request({ username }))`
 * 2) calls async task `userService.login(username, password)`
 * 3) dispatches result of `userService.login(username, password)`
 *     -> Success: dispatches a `LOGIN_SUCCESS` with `dispatch(success(user));`
 *     -> Failure:  dispatches a `LOGIN_FAILURE` action with `dispatch(failure(error));`
 * @param {String} username 
 * @param {String} password 
 */
function loginUser(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  const URI = Routes.LoginUser.url;

  return fetch(URI, requestOptions)
    .then((res) => handleResponse(URI, res))
    .then((token) => {
      saveToken(token);
      return token;
    });
}

/**
 *
 * @param {String} username
 * @param {String} password
 */
function registerUser(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  const URI = Routes.RegisterUser.url;

  return fetch(URI, requestOptions).then((res) => handleResponse(URI, res));
}

/**
 * Removes stored token from local storage
 */
function logoutUser() {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

/**
 * Parses the response, intelligently rejecting the promise
 * if invalid status code
 * @param {String} requestUrl
 * @param {Object} response
 */
function handleResponse(requestUrl, response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (response.ok) return data;
    else return Promise.reject(createError(data, response));
  });

  function createError(data, response) {
    return (data && data.message) || response.statusText;
  }
}

/**
 * creates the bearer token authentication header string
 */
function authHeader() {
  // return authorization header with jwt token
  let user = getToken();
  return user && user.token ? { Authorization: "Bearer " + user.token } : {};
}

/**
 * saves JWT token for user to local storage
 * @param {string} token
 */
export function saveToken(token) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(token));
}
/**
 * retrieves token from local storage (if exists)
 */
export function getToken() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
}
