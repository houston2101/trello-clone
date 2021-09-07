import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Stack, Box, Circle, Flex, Text, Button, useMediaQuery } from "@chakra-ui/react";
import Card from "../components/card";
import Layout from "../components/layout/layout";
import styled from "@emotion/styled";
import CardModal from "../components/cardModal";

import "swiper/swiper-bundle.min.css";

const BoardSwiper = styled(Swiper)`
  & > div .swiper-slide {
    height: 85vh;
    display: flex;
    justify-content: center;
    max-width: 400px;
    &:not(:last-child) {
      margin-right: 50px;
    }
  }
`;

const BoardPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLargerThen1100] = useMediaQuery("(min-width: 1100px)");
  const setIsOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Layout>
      <Flex justifyContent="space-evenly" w="100%" pt="30px" pb="30px">
        <BoardSwiper
          className={isLargerThen1100 ? "swiper-no-swiping" : "swiper"}
          centeredSlides={!isLargerThen1100}
          slidesPerView="1"
          spaceBetween={0}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <Stack bgColor="blue.200" maxW="350px" h="100%" padding="18px 20px" borderRadius="25px">
              <Box borderBottom="1px solid #142F32" mb="20px">
                <Text color="grey.900" textAlign="center">
                  To Do
                </Text>
              </Box>
              <Stack overflow="auto" h="100%">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </Stack>
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
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack bgColor="blue.200" maxW="350px" h="100%" padding="18px 20px" borderRadius="25px">
              <Box borderBottom="1px solid #142F32" mb="20px">
                <Text color="grey.900" textAlign="center">
                  Ready for check
                </Text>
              </Box>
              <Stack overflow="auto" h="100%">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </Stack>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack bgColor="blue.200" maxW="350px" h="100%" padding="18px 20px" borderRadius="25px">
              <Box borderBottom="1px solid #142F32" mb="20px">
                <Text color="grey.900" textAlign="center">
                  Done
                </Text>
              </Box>
              <Stack overflow="auto" h="100%">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </Stack>
            </Stack>
          </SwiperSlide>
        </BoardSwiper>
      </Flex>
      <CardModal isOpen={isOpen} onClose={setIsOpenHandler} />
    </Layout>
  );
};

export default BoardPage;
