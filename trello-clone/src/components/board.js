import * as React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

const Board = () => {
  return (
    <Box
      bgColor="blue.300"
      w={{ base: "100%", md: "40%" }}
      minH="130px"
      borderRadius="25px"
      padding="19px 15px"
      mb="20px"
      mr={{ base: "0", md: "25px" }}
      ml={{ base: "0", md: "25px" }}
      _hover={{
        bgColor: "#6E919A",
      }}
    >
      <Text w="100%" fontWeight="700" mb="10px" borderBottom="2px solid #142F32">
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
