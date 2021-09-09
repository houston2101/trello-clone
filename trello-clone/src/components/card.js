import * as React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

import CardOpenModal from "./sections/cardOpenModal";

const CustomText = styled(Text)`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const Card = ({ update, el }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const setIsOpenHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Box
      _notLast={{ mb: "20px" }}
      bgColor="grey.100"
      borderRadius="25px"
      padding="15px"
      onClick={setIsOpenHandler}
    >
      <Flex justifyContent="space-between" borderBottom="2px solid #142F32" mb="10px">
        <Text
          fontWeight="600"
          w="50%"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {el.title}
        </Text>
        <Flex alignItems="center">
          <Box
            w="30px"
            h="10px"
            bgColor="blue.500"
            borderRadius="30%"
            _notLast={{
              mr: "5px",
            }}
          />
          <Box
            w="30px"
            h="10px"
            bgColor="red.500"
            borderRadius="30%"
            _notLast={{
              mr: "5px",
            }}
          />
          <Box
            w="30px"
            h="10px"
            bgColor="yellow.500"
            borderRadius="30%"
            _notLast={{
              mr: "5px",
            }}
          />
        </Flex>
      </Flex>
      <CustomText display="-webkit-box;" overflow="hidden">
        {el.description}
      </CustomText>
      <CardOpenModal update={update} el={el} isOpen={isOpen} onClose={setIsOpenHandler} />
    </Box>
  );
};

export default Card;
