import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";
import useRoutes from "./routes";
import Fonts from "./theme/fonts";
import { customTheme } from "./theme";

function App() {
  const { login, logout, userId } = useAuth();
  const isAuthenticated = userId;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider value={{ login, logout, userId, isAuthenticated }}>
      <ChakraProvider theme={customTheme}>
        <Fonts />
        <Router>{routes}</Router>
      </ChakraProvider>
    </AuthContext.Provider>
  );
}

export default App;
