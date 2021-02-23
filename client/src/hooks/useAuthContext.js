import { useEffect, useState } from "react";
import { useStore } from "react-redux";

export const useAuthContext = () => {
  const authStore = useStore();
  const [authState, setAuthState] = useState(authStore.getState());
  const { dispatch } = authStore;
  useEffect(
    () => authStore.subscribe(() => setAuthState(authStore.getState())),
    [authStore]
  );

  return [authState, dispatch];
};
