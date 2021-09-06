import { Box, Center } from "@chakra-ui/react";
import * as React from "react";

import Header from "../sections/header/header";

const Layout = ({ children }) => {
  return (
    <Box minH="100vh" backgroundColor="grey.200">
      <Header />
      <Center>{children}</Center>
    </Box>
  );
};

export default Layout;
