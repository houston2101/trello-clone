import { Heading, Box, Button, Flex, Input, Image } from "@chakra-ui/react";
import * as React from "react";
import { Link as BrowserLink } from "react-router-dom";

import LayoutNoHeader from "../components/layout/no-header";

const AuthPage = () => {
  return (
    <LayoutNoHeader>
      <Heading>Log in</Heading>
      <Box>
        <Image src="./logo.png" />
        <Flex>
          <Input></Input>
          <Input></Input>
        </Flex>

        <Flex>
          <Button fontSize={["sm", "sm", "sm", "s"]} bgColor="blue.200" borderRadius="15px">
            Sing up
          </Button>
          <Button>Log in</Button>
        </Flex>
      </Box>
    </LayoutNoHeader>
  );
};

export default AuthPage;
