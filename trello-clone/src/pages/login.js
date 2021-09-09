import { Heading, Button, Flex, Input, Image } from "@chakra-ui/react";
import * as React from "react";
import { Link as BrowserLink } from "react-router-dom";

import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import LayoutNoHeader from "../components/layout/no-header";

const AuthPage = () => {
  const auth = React.useContext(AuthContext);
  const { request } = useHttp();
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      console.log(data);
      auth.login(data.userId, data.email, data.nickname);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <LayoutNoHeader>
      <Heading mb={{ base: "16px", md: "18px" }} fontSize={["l", "l", "l", "3xl"]}>
        Log in
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
            placeholder="Login"
            mb={{ base: "12px", md: "17px" }}
            w={{ base: "220px", md: "300px" }}
            _focus={{
              boxShadow: "none",
            }}
            id="email"
            type="email"
            name="email"
            onChange={changeHandler}
          />
          <Input
            fontSize={["xs", "xs", "xs", "s"]}
            borderRadius="15px"
            bgColor="blue.100"
            border="none"
            placeholder="Password"
            w={{ base: "220px", md: "300px" }}
            _focus={{
              boxShadow: "none",
            }}
            id="password"
            type="password"
            name="password"
            onChange={changeHandler}
          />
        </Flex>

        <Flex justifyContent="space-between" width="100%">
          <Button
            as={BrowserLink}
            fontSize={["xs", "xs", "xs", "s"]}
            bgColor="blue.300"
            borderRadius="15px"
            w={{ base: "102px", md: "140px" }}
            fontWeight="400"
            _hover={{
              bgColor: "#7697A0",
            }}
            _focus={{
              boxShadow: "none",
            }}
            to="/register"
          >
            Sing up
          </Button>
          <Button
            fontSize={["xs", "xs", "xs", "s"]}
            bgColor="blue.300"
            borderRadius="15px"
            w={{ base: "102px", md: "140px" }}
            fontWeight="400"
            _hover={{
              bgColor: "#7697A0",
            }}
            _focus={{
              boxShadow: "none",
            }}
            onClick={loginHandler}
          >
            Log in
          </Button>
        </Flex>
      </Flex>
    </LayoutNoHeader>
  );
};

export default AuthPage;
