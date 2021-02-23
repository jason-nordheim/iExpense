import { API_CONFIG, LOCAL_STORAGE_KEY } from "./_config.dev";

const { Routes } = API_CONFIG;
export const userService = {
  isTokenExpired: isTokenExpired,
  login: loginUser,
  logout: logoutUser,
  register: registerUser,
  whoAmI: whoAmI,
};

function isTokenExpired(expiration) {
  const currentDate = new Date();
  const tokenExpiration = new Date(expiration * 1000);
  return currentDate < tokenExpiration;
}

function loginUser({ username, password }) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };
  const URI = Routes.LoginUser.url;
  return fetch(URI, requestOptions).then((res) => handleResponse(URI, res));
}

function registerUser({ username, password }) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };
  const URI = Routes.RegisterUser.url;
  return fetch(URI, requestOptions).then((res) => handleResponse(URI, res));
}

function whoAmI(token) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(token),
  };
  const URI = Routes.WhoAmI.url;
  return fetch(URI, requestOptions).then((res) => handleResponse(URI, res));
}

function logoutUser() {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function handleResponse(requestUrl, response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (response.ok) return data;
    else return Promise.reject({ data, response });
  });
}

/**
 * creates the bearer token authentication header string
 */
function authHeader(token) {
  // return authorization header with jwt token
  return {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  };
}
