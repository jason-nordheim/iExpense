import React, { useState, useEffect } from "react";
import { InputField } from "./common/InputField";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginEnabled, setLoginEnabled] = useState(false);

  useEffect(() => {
    if (username && username.length > 5 && password && password.length > 5) {
      setLoginEnabled(true);
    } else setLoginEnabled(false);
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Register</h3>
      <div className="row">
        <InputField
          type="text"
          htmlFor="username"
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
          placeholder="Password"
          value={password}
          setValue={setPassword}
          minLength={5}
          required
        />
      </div>
      <div className="row">
        <button
          className={`waves-effect waves-light btn ${
            !loginEnabled && "disabled"
          }`}
          type="submit"
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
      <div className="row">
        Already have an account? Login <a href="#!">Here</a>
      </div>
    </form>
  );
};
