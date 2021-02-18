import { userConstants } from "../_constants";

/**
 * manages the registration section of the application state
 *
 * ->   on registration request it just sets a `registering` flag set to `true`
 * ->   On register success or failure it clears the registration state.
 *
 * @param {Object} state
 * @param {Object} action
 */
export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
