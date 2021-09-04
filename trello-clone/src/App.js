import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import AuthPage from "./pages/login";
import RegPage from "./pages/signup";
import Fonts from "./theme/fonts";
import { customTheme } from "./theme";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <Router>
        <Switch>
          <Route path="/" exact>
            <AuthPage />
          </Route>
          <Route path="/register">
            <RegPage />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
