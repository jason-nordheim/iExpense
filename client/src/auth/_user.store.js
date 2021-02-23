import { createStore } from "redux";
import { userReducer } from "./_user.reducer";

/**
 * Create a Redux store holding the state of your app.
 * Its API is { subscribe, dispatch, getState }.
 */
export let userStore = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
