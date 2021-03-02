import React, { useState, useEffect } from "react";
import { InputField } from "../../common/InputField";
import { userActions } from "../../../auth/_user.actions";
import { FormError } from "../../common/FormError";
import { useAuthContext } from "../../../hooks/useAuthContext";

export const LoginForm = ({ id }) => {
    const [authState, dispatch] = useAuthContext();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginEnabled, setLoginEnabled] = useState(false);

    /** subscribe to changes in the store  */
    console.log('authState', authState);

    /** enable login if both username and password fields have at least 5 characters  */
    useEffect(() => {
        const hasValidCreds = () => username && username.length > 5 && password && password.length > 5;
        setLoginEnabled(hasValidCreds());
    }, [username, password]);


    const handleSubmit = (e) => {
        e.preventDefault();
        loginEnabled && userActions.login(dispatch, username, password);
    };
    return (
        <div id={id}>
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <div className="row">
                    <InputField
                        type="text"
                        htmlFor="login_username"
                        enabled={authState.loggingIn ? false : true}
                        placeholder="Username"
                        value={username}
                        setValue={setUsername}
                        minLength={5}
                        required
                    />
                </div>
                <div className="row">
                    <InputField
                        type="password"
                        htmlFor="login_password"
                        enabled={authState.loggingIn ? false : true}
                        placeholder="Password"
                        value={password}
                        setValue={setPassword}
                        minLength={5}
                        required
                    />
                </div>
                <div className="row">
                    <button
                        className={`blue darken-4 waves-effect waves-light btn ${!loginEnabled && "disabled"
                            }`}
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Login
                </button>
                </div>
                {authState.error && <FormError errorMessage={authState.error} />}
            </form>
        </div>
    );
};
