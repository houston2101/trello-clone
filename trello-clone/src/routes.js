import * as React from "react";
import { Route, Switch, Redirect } from "react-router";

import AuthPage from "./pages/login";
import RegPage from "./pages/signup";
import Account from "./pages/account";
import MainPage from "./pages/main";
import BoardPage from "./pages/board";
import Faq from "./pages/faq";

const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/boards/:id">
          <BoardPage />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Route path="/register">
        <RegPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default useRoutes;
