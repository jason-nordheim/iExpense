import { alertConstants } from "../_constants";

/**
 * Redux action creators for actions related to alerts / toaster notifications in the application
 */
export const alertActions = {
  success,
  error,
  clear,
};

function success(message) {
  return { type: alertConstants.SUCCESS, message };
}

function error(message) {
  return { type: alertConstants.ERROR, message };
}

function clear() {
  return { type: alertConstants.CLEAR };
}
