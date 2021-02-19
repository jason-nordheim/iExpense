import { createStore } from "redux";
import { userReducer } from "./_user.reducer";

/**
 * Create a Redux store holding the state of your app.
 * Its API is { subscribe, dispatch, getState }.
 */
export let userStore = createStore(userReducer);
