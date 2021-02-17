import React from "react";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
export const App = () => {
  return (
    <BrowserRouter>
      <main className="purple lighten-4" style={{ height: "100vh" }}>
        <NavBar />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
};
