import { Box, Center } from "@chakra-ui/react";
import * as React from "react";

import Header from "../sections/header/header";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Center>{children}</Center>
    </Box>
  );
};

export default Layout;
