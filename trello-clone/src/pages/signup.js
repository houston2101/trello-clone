import * as React from "react";
import { Heading, Button, Flex, Input, Image } from "@chakra-ui/react";
import { Link as BrowserLink } from "react-router-dom";

import LayoutNoHeader from "../components/layout/no-header";

const RegPage = () => {
  return (
    <LayoutNoHeader>
      <Heading mb={{ base: "16px", md: "18px" }} fontSize={["l", "l", "l", "3xl"]}>
        Sing up
      </Heading>

      <Flex
        borderRadius="15px"
        bgColor="grey.200"
        flexDir="column"
        alignItems="center"
        padding={{ base: "25px", md: "35px" }}
        w={{ base: "270px", md: "370px" }}
      >
        <Image
          src="./logo.png"
          h={{ base: "100px", md: "140px" }}
          mb={{ base: "25px", md: "35px" }}
        />
        <Flex flexDir="column" width="100%" alignItems="center" mb={{ base: "15px", md: "22px" }}>
          <Input
            fontSize={["xs", "xs", "xs", "s"]}
            borderRadius="15px"
            bgColor="blue.100"
            border="none"
            placeholder="Username"
            mb={{ base: "12px", md: "17px" }}
            w={{ base: "220px", md: "300px" }}
            _focus={{
              boxShadow: "none",
            }}
          ></Input>
          <Input
            fontSize={["xs", "xs", "xs", "s"]}
            borderRadius="15px"
            bgColor="blue.100"
            border="none"
            placeholder="E-mail"
            mb={{ base: "12px", md: "17px" }}
            w={{ base: "220px", md: "300px" }}
            _focus={{
              boxShadow: "none",
            }}
          ></Input>
          <Input
            fontSize={["xs", "xs", "xs", "s"]}
            borderRadius="15px"
            bgColor="blue.100"
            border="none"
            placeholder="Password"
            mb={{ base: "12px", md: "17px" }}
            w={{ base: "220px", md: "300px" }}
            _focus={{
              boxShadow: "none",
            }}
          ></Input>
          <Input
            fontSize={["sm", "sm", "sm", "s"]}
            borderRadius="15px"
            bgColor="blue.100"
            border="none"
            placeholder="Repeat password"
            w={{ base: "220px", md: "300px" }}
            _focus={{
              boxShadow: "none",
            }}
          ></Input>
        </Flex>

        <Flex justifyContent="space-between" width="100%">
          <Button
            as={BrowserLink}
            fontSize={["2xs", "2xs", "2xs", "xs"]}
            bgColor="blue.300"
            borderRadius="15px"
            w={{ base: "100px", md: "140px" }}
            fontWeight="400"
            _hover={{
              bgColor: "#93A7AD",
            }}
            _focus={{
              boxShadow: "none",
            }}
            to="/"
          >
            Back to Login
          </Button>
          <Button
            as={BrowserLink}
            fontSize={["2xs", "2xs", "2xs", "xs"]}
            bgColor="blue.300"
            borderRadius="15px"
            w={{ base: "100px", md: "140px" }}
            fontWeight="400"
            _hover={{
              bgColor: "#93A7AD",
            }}
            _focus={{
              boxShadow: "none",
            }}
            to="/account"
          >
            Register
          </Button>
        </Flex>
      </Flex>
    </LayoutNoHeader>
  );
};

export default RegPage;
