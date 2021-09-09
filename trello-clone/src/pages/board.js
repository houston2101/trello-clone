import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import Layout from "../components/layout/layout";
import styled from "@emotion/styled";
import CardModal from "../components/cardModal";
import { useParams } from "react-router-dom";

import { useHttp } from "../hooks/http.hook";

import "swiper/swiper-bundle.min.css";
import Spinner from "../components/spinner";
import BoardColumn from "../components/boardColumn";

const BoardSwiper = styled(Swiper)`
  @media (min-width: 1540px) {
    width: 1440px;
  }
  & > div {
    .swiper-slide {
      height: 85vh;
      display: flex;
      justify-content: center;
    }
  }
`;

const BoardPage = () => {
  const { id } = useParams();
  const { request } = useHttp();

  const [update, setUpdate] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  const [board, setBoard] = React.useState({});
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLargerThen900, isLargerThen1100] = useMediaQuery([
    "(min-width: 900px)",
    "(min-width: 1100px)",
  ]);

  React.useEffect(async () => {
    if (update) {
      try {
        const data = await request("/api/board/get-by-id", "POST", { id: id });
        setBoard(data.boards);
        setLoading(false);
        setUpdate(false);
      } catch (e) {
        console.log(e);
      }
    }
  }, [id, update]);

  React.useEffect(() => {
    document.title = `Trello-Clone - ${board.title}`;
    console.log(board);
  }, [board]);

  const setIsOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  if (loading) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }

  return (
    <Layout>
      <Flex justifyContent="space-evenly" w="100%" pt="30px" pb="30px">
        <BoardSwiper
          className={isLargerThen1100 ? "swiper-no-swiping" : "swiper"}
          resizeObserver
          observeSlideChildren
          observer
          centeredSlides={isLargerThen900 ? false : true}
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{
            900: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
        >
          {board.columns.map((column) => {
            return (
              <SwiperSlide key={column.id}>
                <BoardColumn
                  update={setUpdate}
                  column={column}
                  setIsOpenHandler={setIsOpenHandler}
                />
              </SwiperSlide>
            );
          })}
        </BoardSwiper>
      </Flex>
      <CardModal boardId={id} update={setUpdate} isOpen={isOpen} onClose={setIsOpenHandler} />
    </Layout>
  );
};

export default BoardPage;
