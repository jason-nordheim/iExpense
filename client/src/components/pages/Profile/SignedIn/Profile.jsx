import { PageTitle } from "../../common/PageTitle";
import { MyAccount, SignIn } from './index';
import { useAuthContext } from "../../../hooks/useAuthContext";

export const Profile = () => {
    const [authState, dispatch] = useAuthContext();

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

            { authState.authenticated &&
                <div className="container">
                    <div className="card">

                    </div>
                </div>
            }
        </>
    );
};
