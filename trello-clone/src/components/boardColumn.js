import * as React from "react";
import { Stack, Box, Circle, Flex, Text, Button } from "@chakra-ui/react";

import Card from "./card";

const BoardColumn = ({ update, column, setIsOpenHandler }) => {
  return (
    <Stack
      bgColor="blue.200"
      maxW="350px"
      w="350px"
      h="100%"
      padding="18px 20px"
      borderRadius="25px"
    >
      <Box borderBottom="2px solid #142F32" mb="20px">
        <Text color="grey.900" fontWeight="600" textAlign="center">
          {column.title}
        </Text>
      </Box>
      <Stack overflow="auto" h="100%">
        {column.cards.map((el) => {
          return <Card update={update} el={el} key={el.id} />;
        })}
      </Stack>
      {column.id === "to-do" ? (
        <Button
          w="100%"
          h="80px"
          left="0"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bottom="0"
          bgColor="blue.300"
          borderRadius="15px"
          _focus={{
            boxShadow: "none",
          }}
          onClick={setIsOpenHandler}
        >
          <Flex alignItems="center">
            Add card
            <Circle
              pos="relative"
              size="15px"
              ml="7px"
              _before={{
                content: '""',
                w: "15px",
                h: "3px",
                pos: "absolute",
                bgColor: "grey.900",
              }}
              _after={{
                content: '""',
                w: "15px",
                h: "3px",
                pos: "absolute",
                bgColor: "grey.900",
                transform: "rotate(90deg)",
              }}
            />
          </Flex>
        </Button>
      ) : null}
    </Stack>
  );
};

export default BoardColumn;
