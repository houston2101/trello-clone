import * as React from "react";

import Layout from "../components/layout/layout";
import Board from "../components/board";
import BoardModal from "../components/boardModal";
import { Flex, Text, Button } from "@chakra-ui/react";

const MainPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const setIsOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Layout>
      <Flex
        flexDir="column"
        alignItems="center"
        pt="25px"
        pb={{ base: "0", md: "25px" }}
        minW="100%"
      >
        <Text fontSize={{ base: "32px", md: "48px" }}>Your boards</Text>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          flexWrap={{ base: "nowrap", md: "wrap" }}
          pt="20px"
          minW="90%"
          justifyContent="center"
        >
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </Flex>

        <Button
          w={{ base: "100%", md: "200px" }}
          h="50px"
          borderRadius={{ base: "0", md: "15px" }}
          pos={{ base: "sticky", md: "relative" }}
          bottom="0"
          fontSize={["xs", "xs", "xs", "s"]}
          bgColor="#6dacb8"
          fontWeight="400"
          _hover={{
            bgColor: "#A6A6A6",
          }}
          _focus={{
            boxShadow: "none",
          }}
          onClick={setIsOpenHandler}
        >
          Create new board
        </Button>
      </Flex>
      <BoardModal isOpen={isOpen} onClose={setIsOpenHandler} />
    </Layout>
  );
};

export default MainPage;
