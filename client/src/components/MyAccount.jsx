import { useState, useEffect } from 'react';
import { useStore } from 'react-redux';
import { userActions } from "../auth/_user.actions";

export const MyAccount = () => {
    const authStore = useStore();
    const [authState, setAuthState] = useState(authStore.getState());

    useEffect(() => authStore.subscribe(() => setAuthState(authStore.getState())), [authStore]);

    const handleLogout = (event) => {
        event.preventDefault();
        userActions.logout(authStore.dispatch);
    };

    return (
        <>
            <div className="card-action right-align">
                <a class="waves-effect waves-light btn blue accent-4"
                    onClick={handleLogout}>Logout</a>
            </div>
            <div className="card-content">
                Welcome {authState.user.username}
            </div>
        </>
    );
};