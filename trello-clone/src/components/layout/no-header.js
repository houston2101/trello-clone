import { Center } from "@chakra-ui/react";
import * as React from "react";

const LayoutNoHeader = ({ children }) => {
  return (
    <Center bgColor="blue.100" minH="100vh" flexDir="column">
      {children}
    </Center>
  );
};

export default LayoutNoHeader;
