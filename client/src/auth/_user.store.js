import { createStore } from "redux";
import { userReducer } from "./_user.reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

/**
 * Create a Redux store holding the state of your app.
 * Its API is { subscribe, dispatch, getState }.
 */
export let userStore = createStore({
  reducer: userReducer,
  middleware: [thunk, logger],
});
