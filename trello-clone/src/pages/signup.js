import * as React from "react";
import { Heading, Button, Flex, Input, Image } from "@chakra-ui/react";
import { Link as BrowserLink } from "react-router-dom";

import { useHttp } from "../hooks/http.hook";
import LayoutNoHeader from "../components/layout/no-header";

const RegPage = () => {
  const { request } = useHttp();
  const [form, setForm] = React.useState({
    nickname: "",
    email: "",
    password: "",
    repeatedPassword: "",
  });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const registerHandler = async () => {
    if (form.password.length < 6) {
    } else if (form.repeatedPassword === form.password) {
      try {
        const data = await request("api/auth/register", "POST", { ...form });
        console.log("data: ", data);
      } catch (e) {
        console.log("err", e);
      }
    } else {
      console.log("err");
    }
  };

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
            type="nickname"
            name="nickname"
            id="nickname"
            onChange={changeHandler}
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
            type="email"
            name="email"
            id="email"
            onChange={changeHandler}
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
            type="password"
            name="password"
            id="password"
            onChange={changeHandler}
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
            type="password"
            name="repeatedPassword"
            id="repeatedPassword"
            onChange={changeHandler}
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
              bgColor: "##7697A0",
            }}
            _focus={{
              boxShadow: "none",
            }}
            to="/"
          >
            Back to Login
          </Button>
          <Button
            fontSize={["2xs", "2xs", "2xs", "xs"]}
            bgColor="blue.300"
            borderRadius="15px"
            w={{ base: "100px", md: "140px" }}
            fontWeight="400"
            _hover={{
              bgColor: "#7697A0",
            }}
            _focus={{
              boxShadow: "none",
            }}
            onClick={registerHandler}
          >
            Register
          </Button>
        </Flex>
      </Flex>
    </LayoutNoHeader>
  );
};

export default RegPage;
