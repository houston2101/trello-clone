import * as React from "react";
import { Link as BrowserLink } from "react-router-dom";
import { Text, Center } from "@chakra-ui/react";

const Logo = ({ title }) => {
  return (
    <Center as={BrowserLink} to="/">
      <Text fontSize={{ base: "18px", md: "30px" }} fontWeight="600">
        {title}
      </Text>
    </Center>
  );
};

export default Logo;
