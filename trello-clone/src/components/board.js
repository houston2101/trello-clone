import * as React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { Link as BrowserLink } from "react-router-dom";

const Board = () => {
  return (
    <Box bgColor="blue.300" minH="130px" minW="290px" borderRadius="25px" padding="15px 8px">
      <Text as={BrowserLink} to="/boards/some-board" w="100%">
        Board title
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
