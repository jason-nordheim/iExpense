import { ALERT_CONSTANTS } from "./_alert.constants";

/**
 * Action creators related to alerts
 */
export const ALERT_ACTIONS = {
  success: (message) => ({ type: ALERT_CONSTANTS.SUCCESS, message }),
  error: (message) => ({ type: ALERT_CONSTANTS.ERROR, message }),
  clear: () => ({ type: ALERT_CONSTANTS.CLEAR }),
};
