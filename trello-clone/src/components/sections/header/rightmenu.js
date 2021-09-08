import * as React from "react";
import styled from "@emotion/styled";
import { Image, Button, Box, Stack, Link, useMediaQuery } from "@chakra-ui/react";
import { Link as BrowserLink } from "react-router-dom";

const CustomButton = styled(Button)`
  &:hover {
    color: var(--chakra-colors-blue-300);
    border-bottom-color: var(--chakra-colors-blue-300);
    background-color: transparent;

    span img {
      filter: invert(43%) sepia(33%) saturate(427%) hue-rotate(146deg) brightness(87%) contrast(86%);
    }
  }
`;

const RightMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [isLargerThen768] = useMediaQuery("(min-width: 768px)");
  const setIsOpenHandler = () => {
    setIsOpen(isOpen ? false : true);
  };
  return (
    <Box>
      <Button
        bgColor="transparent"
        borderColor="transparent"
        pl="0"
        pr="0"
        _hover={{
          bgColor: "transparent",
        }}
        _active={{
          bgColor: "transparent",
        }}
        _focus={{
          boxShadow: "none",
        }}
        onClick={setIsOpenHandler}
        leftIcon={
          <Image
            src="user.ico"
            bgColor="grey.900"
            w="25px"
            h="25px"
            objectFit="scale-down"
            borderRadius="50%"
          />
        }
      >
        John Doe
      </Button>
      <Box
        right={"0"}
        pos="absolute"
        bgColor="grey.200"
        w={isOpen ? { base: "100%", md: "400px" } : "0"}
        transition="ease-in-out 1s"
        top={isLargerThen768 ? "70px" : "50px"}
        overflow="hidden"
        zIndex="dropdown"
      >
        <Stack
          pt="42px"
          pl="20px"
          pr="33px"
          h={`calc(100vh - ${isLargerThen768 ? "70px" : "50px"})`}
          spacing="16px"
          w={{ base: "100vw", md: "400px" }}
        >
          <Link
            as={BrowserLink}
            to="/"
            fontSize="18px"
            borderBottom="2px solid black"
            _hover={{
              textDecoration: "none",
              color: "blue.300",
              borderBottomColor: "blue.300",
            }}
          >
            Home
          </Link>
          <Link
            as={BrowserLink}
            to="/main"
            fontSize="18px"
            borderBottom="2px solid black"
            _hover={{
              textDecoration: "none",
              color: "blue.300",
              borderBottomColor: "blue.300",
            }}
          >
            Boards
          </Link>
          <Link
            as={BrowserLink}
            fontSize="18px"
            borderBottom="2px solid black"
            _hover={{
              textDecoration: "none",
              color: "blue.300",
              borderBottomColor: "blue.300",
            }}
          >
            Account
          </Link>
          <Link
            as={BrowserLink}
            to="/faq"
            fontSize="18px"
            borderBottom="2px solid black"
            _hover={{
              textDecoration: "none",
              color: "blue.300",
              borderBottomColor: "blue.300",
            }}
          >
            FAQ
          </Link>
          <CustomButton
            as={BrowserLink}
            to="/"
            fontSize="18px"
            bgColor="transparent"
            justifyContent="flex-end"
            flexDir="row-reverse"
            padding="0"
            pb="10px"
            h="29px"
            fontWeight="400"
            borderBottom="2px solid black"
            borderRadius="0"
            _active={{
              bgColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
            leftIcon={<Image src="./logout.png" padding="5px" />}
          >
            Log out
          </CustomButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default RightMenu;
