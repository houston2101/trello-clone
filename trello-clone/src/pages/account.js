import * as React from "react";
import { Box, Circle, Flex, Text, Image, Button, Input } from "@chakra-ui/react";

import Layout from "../components/layout/layout";

const Account = () => {
  return (
    <Layout>
      <Box
        padding={{ base: "15px", md: "40px" }}
        mt="10px"
        h="calc(100vh - 90px)"
        overflow="auto"
        w={{ base: "90vw", md: "70vw" }}
        bgColor="blue.200"
        borderRadius="25px"
      >
        <Box display="flex" flexDir="column" alignItems="center" minH="80vh">
          <Flex alignItems="center" mb="24px">
            <Circle size={{ base: "75px", md: "166px" }} bgColor="grey.800" overflow="hidden">
              <Image />
            </Circle>
            <Flex pl="16px" flexDir="column">
              <Text fontSize={{ base: "s", md: "l" }} mb="3px">
                John Doe
              </Text>
              <Text fontSize={{ base: "2xs", md: "s" }}>JohnDoe1978@gmail.com</Text>
            </Flex>
          </Flex>

          <Flex flexDir="column" alignItems="center">
            <Input
              fontSize={["xs", "xs", "xs", "s"]}
              borderRadius="15px"
              bgColor="blue.100"
              border="none"
              placeholder="Old password"
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
              placeholder="New password"
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
              placeholder="Repeat new password"
              mb={{ base: "12px", md: "17px" }}
              w={{ base: "220px", md: "300px" }}
              _focus={{
                boxShadow: "none",
              }}
            ></Input>
            <Button
              fontSize={["xs", "xs", "xs", "s"]}
              bgColor="blue.300"
              borderRadius="15px"
              mb="17px"
              fontWeight="400"
              _hover={{
                bgColor: "#93A7AD",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              Change password
            </Button>
          </Flex>
          <Button
            fontSize={["xs", "xs", "xs", "s"]}
            bgColor="red.100"
            borderRadius="15px"
            mt="auto"
            fontWeight="400"
          >
            Delete my account
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default Account;
