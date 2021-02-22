import { useState, useEffect } from "react";
import { useStore } from "react-redux";
import { PageTitle } from "../components/common/PageTitle";
import { MyAccount } from '../components/MyAccount';
import { SignIn } from "./SignIn";



export const Profile = () => {
    const authStore = useStore();
    const [authState, setAuthState] = useState(authStore.getState());

    useEffect(() => authStore.subscribe(() => setAuthState(authStore.getState())), []);



    return (
        <>
            <div className="row">
                <PageTitle value="Profile" />
            </div>

            <div className="container">
                <div className="card">
                    {authState.loggedIn
                        ? <MyAccount authState={authState} authStore={authState} />
                        : <SignIn
                            authState={authState}
                            authStore={authState}
                        />
                    }

                </div>
            </div>
        </>
    );
};
