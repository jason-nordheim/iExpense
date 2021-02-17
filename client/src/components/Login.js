import React, { useState, useEffect } from "react";

export const Login = () => {
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
    <form onSubmit={handleSubmit} className="container">
      <div className="row">
        <h3>Login</h3>
      </div>
      <div className="row">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          htmlFor="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="row">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          Login
        </button>
      </div>
    </form>
  );
};
