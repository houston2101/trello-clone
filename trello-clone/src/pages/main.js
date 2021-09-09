import * as React from "react";

import Layout from "../components/layout/layout";
import Board from "../components/board";
import BoardModal from "../components/boardModal";
import { Flex, Text, Button } from "@chakra-ui/react";

import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import Spinner from "../components/spinner";

const MainPage = () => {
  const auth = React.useContext(AuthContext);
  const [actualData, setActualData] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const [boards, setBoards] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const setIsOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const { request } = useHttp();

  React.useEffect(async () => {
    if (actualData) {
      setLoading(true);
      const data = await request("api/board/get", "POST", { userId: auth.userId });
      setBoards(data.boards);
      setActualData(false);
      setLoading(false);
    }
  }, [auth.userId, actualData]);

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
        {loading ? (
          <Spinner />
        ) : (
          <Flex
            flexDir={{ base: "column", md: "row" }}
            flexWrap={{ base: "nowrap", md: "wrap" }}
            pt="20px"
            minW="90%"
            justifyContent="center"
          >
            {boards.map((el) => {
              return <Board board={el} key={el._id} />;
            })}
          </Flex>
        )}

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
      <BoardModal isOpen={isOpen} onClose={setIsOpenHandler} reload={setActualData} />
    </Layout>
  );
};

export default MainPage;
