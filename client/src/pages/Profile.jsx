import { useState, useEffect } from "react";
import { useStore } from "react-redux";
import { PageTitle } from "../components/common/PageTitle";
import { MyAccount } from '../components/MyAccount';
import { SignIn } from "./SignIn";
import { userService } from '../auth/_userService';
import { userActions } from "../auth/_user.actions";


export const Profile = () => {
    const authStore = useStore();
    const [authState, setAuthState] = useState(authStore.getState());

    useEffect(() => authStore.subscribe(() => setAuthState(authStore.getState())), [authStore]);

    // useEffect(() => {
    //     if (authState && authState.exp && authState.token && userService.tokenIsValid()) {
    //         // todo get current user 
    //         userService.whoAmI(authState.token)
    //             .then(
    //                 (success) => {
    //                     const payload = { username: success.username, token: authState.token, exp: authState.exp };
    //                     userActions.alreadyAuthenticated(authStore.dispatch, payload);
    //                 },
    //                 (error) => userActions.logout(authStore.dispatch));;
    //     } else {
    //         userActions.logout(authStore.dispatch);
    //     }
    // }, [authState, authStore]);

    return (
        <>
            <div className="row">
                <PageTitle value="Profile" />
            </div>

            <div className="container">
                <div className="card">
                    {authState.authenticated
                        ? <MyAccount />
                        : <SignIn />
                    }

                </div>
            </div>
        </>
    );
};
