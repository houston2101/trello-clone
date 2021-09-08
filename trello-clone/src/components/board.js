import * as React from "react";
import { Box, Stack, Text, Button } from "@chakra-ui/react";
import { Link as BrowserLink } from "react-router-dom";

const Board = () => {
  return (
    <Box
      bgColor="blue.300"
      w={{ base: "100%", md: "40%" }}
      minH="130px"
      as={BrowserLink}
      to="/boards/some-board"
      borderRadius="25px"
      padding="19px 15px"
      mb="20px"
      mr={{ base: "0", md: "25px" }}
      ml={{ base: "0", md: "25px" }}
      _hover={{
        bgColor: "#6E919A",
      }}
    >
      <Text
        w="100%"
        fontWeight="700"
        mb="10px"
        borderBottom="2px solid #142F32"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        Board title{" "}
        <Button
          mb="10px"
          bgColor="#ADC9C4"
          _focus={{
            boxShadow: "none",
          }}
        >
          Edit
        </Button>
      </Text>
      <Stack spacing="6px">
        <Text>Current: N</Text>
        <Text>Check: N</Text>
        <Text>Done: N</Text>
      </Stack>
    </Box>
  );
};

export default Board;
