import { useEffect, useState } from "react";
import { useStore } from "react-redux";

export const useAuthContext = () => {
  const authStore = useStore();
  const [authState, setAuthState] = useState(authStore.getState());
  const { dispatch } = authStore;
  useEffect(() => {
    let unsubscribe = authStore.subscribe((listener) => {
      const newState = authStore.getState();
      console.log(newState);
      setAuthState(newState);
    });
  }, [authStore, authState]);

  return [authState, dispatch];
};
