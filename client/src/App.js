import React from "react";
import { NavBar } from "./components/common/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { userStore } from "./auth/_user.store";
import { HomePage } from "./components/pages/Home/HomePage";
import { ProfilePage } from "./components/pages/Profile/ProfilePage";

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={userStore}>
        <main className="blue lighten-4" style={{ height: "100vh" }}>
          <NavBar />
          <Switch>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </main>
      </Provider>
    </BrowserRouter>
  );
};
