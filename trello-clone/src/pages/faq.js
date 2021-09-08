import * as React from "react";
import {
  Box,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { List, ListItem, ListIcon, UnorderedList } from "@chakra-ui/react";

import Layout from "../components/layout/layout";

const Faq = () => {
  return (
    <Layout>
      <Flex
        justifyContent="center"
        overflow="hidden"
        flexDir="column"
        pl={{ base: "25px", md: "0" }}
        pr={{ base: "25px", md: "0" }}
        w="100%"
      >
        <Text fontSize={{ base: "32px", md: "48px" }} pt="25px" pb="25px" textAlign="center">
          Frequently asked questions
        </Text>
        <Accordion allowToggle>
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            w="100%"
            justifyContent="center"
            alignItems={{ base: "center", lg: "start" }}
          >
            <Flex flexDir="column" width="100%">
              <AccordionItem margin="9px">
                <AccordionButton
                  borderColor="transparent"
                  _hover={{ bgColor: "#6E919A" }}
                  _focus={{ borderColor: "transparent" }}
                  bgColor="#93A7AD"
                  bgColor="#93A7AD"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Text fontSize={{ base: "12px", md: "18px" }} mr="10px" textAlign="start">
                    Как работает система отметок на карточках?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel fontSize={{ base: "12px", md: "16px" }}>
                  <Text>Отметками обозначается приоритет срочности задач:</Text>
                  <List>
                    <ListItem>Красный - наиболее срочная задача.</ListItem>
                    <ListItem>Жёлтый - менее срочная задача.</ListItem>
                    <ListItem>Синий - наименее срочная задача.</ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem margin="9px">
                <AccordionButton
                  borderColor="transparent"
                  _hover={{ bgColor: "#6E919A" }}
                  _focus={{ borderColor: "transparent" }}
                  bgColor="#93A7AD"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Text fontSize={{ base: "12px", md: "18px" }} mr="10px" textAlign="start">
                    На чём основан принцип работы с данным приложением?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel fontSize={{ base: "12px", md: "16px" }}>
                  <Text>
                    Приложение создавалось на основании работы по методологии "Канбан", используемой
                    при разработке проектов в различных компаниях
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem margin="9px">
                <AccordionButton
                  borderColor="transparent"
                  _hover={{ bgColor: "#6E919A" }}
                  _focus={{ borderColor: "transparent" }}
                  bgColor="#93A7AD"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Text fontSize={{ base: "12px", md: "18px" }} mr="10px" textAlign="start">
                    В чём заключается принцип разработки по методологии "Канбан"?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel fontSize={{ base: "12px", md: "16px" }}>
                  <Text>
                    Метод управления разработкой, реализующий принцип «точно в срок» и
                    способствующий равномерному распределению нагрузки между работниками. Задачи по
                    мере поступления заносятся в отдельный список, откуда каждый разработчик может
                    извлечь требуемую задачу. Также у задач присутствует 3 статуса, по которым они
                    группируются: "текущие", "в процессе", "выполненные".
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Flex>

            <Flex flexDir="column" width="100%">
              <AccordionItem margin="9px">
                <AccordionButton
                  borderColor="transparent"
                  _hover={{ bgColor: "#6E919A" }}
                  _focus={{ borderColor: "transparent" }}
                  bgColor="#93A7AD"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Text fontSize={{ base: "12px", md: "18px" }} mr="10px" textAlign="start">
                    Приложение является аналогом?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel fontSize={{ base: "12px", md: "16px" }}>
                  <Text>
                    Да, оно является аналогом таких известных приложений для контроля и организации
                    процесса разработки как WEEEK, Wrike, Asana, ClickUp и, конечно же, Trello
                    (которым, к слову, и вдохновлялись разработчики)
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem margin="9px">
                <AccordionButton
                  borderColor="transparent"
                  _hover={{ bgColor: "#6E919A" }}
                  _focus={{ borderColor: "transparent" }}
                  bgColor="#93A7AD"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Text fontSize={{ base: "12px", md: "18px" }} mr="10px" textAlign="start">
                    Кому может быть полезно данное приложение?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel fontSize={{ base: "12px", md: "16px" }}>
                  <Text>
                    Приложение будет полезно как опытным разработчикам, имеющих представление о
                    рабочих процессах в компаниях и методологиях разработки, так и обычным
                    работникам, студентам и др., желающим структурировать свой рабочий процесс.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem margin="9px">
                <AccordionButton
                  borderColor="transparent"
                  _hover={{ bgColor: "#6E919A" }}
                  _focus={{ borderColor: "transparent" }}
                  bgColor="#93A7AD"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Text fontSize={{ base: "12px", md: "18px" }} mr="10px" textAlign="start">
                    Ваше приложение доступно только на десктопе?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel fontSize={{ base: "12px", md: "16px" }}>
                  <Text>
                    Наше приложение является PWA (Progressive WEb Application) и может запускаться
                    как на десктопе, так и на мобильных устройствах.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Flex>

            <Flex flexDir="column" width="100%">
              <AccordionItem margin="9px">
                <AccordionButton
                  borderColor="transparent"
                  _hover={{ bgColor: "#6E919A" }}
                  _focus={{ borderColor: "transparent" }}
                  bgColor="#93A7AD"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Text fontSize={{ base: "12px", md: "18px" }} mr="10px" textAlign="start">
                    Какой стек технологий использовался для реализации приложения?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel fontSize={{ base: "12px", md: "16px" }}>
                  <Text>
                    MERN - JavaScript-стек, разработанный для упрощения процесса разработки. MERN
                    включает в себя четыре компонента с открытым исходным кодом: MongoDB, Express,
                    React и Node. js. Эти компоненты обеспечивают комплексную среду для работы
                    разработчиков.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem margin="9px">
                <AccordionButton
                  borderColor="transparent"
                  _hover={{ bgColor: "#6E919A" }}
                  _focus={{ borderColor: "transparent" }}
                  bgColor="#93A7AD"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Text fontSize={{ base: "12px", md: "18px" }} mr="10px" textAlign="start">
                    Является ли данная версия приложения итоговой?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel fontSize={{ base: "12px", md: "16px" }}>
                  <Text>
                    В планах - возможность добавления нескольких пользователей на доску, назначение
                    ролей (с соответствующим индивидуальным функционалом) и многое другое :)
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem margin="9px">
                <AccordionButton
                  borderColor="transparent"
                  _hover={{ bgColor: "#6E919A" }}
                  _focus={{ borderColor: "transparent" }}
                  bgColor="#93A7AD"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Text fontSize={{ base: "12px", md: "18px" }} mr="10px" textAlign="start">
                    Developers
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel fontSize={{ base: "12px", md: "16px" }}>
                  <Text>Pereverzev D.A. & Pereverzeva E.V. :3</Text>
                </AccordionPanel>
              </AccordionItem>
            </Flex>
          </Flex>
        </Accordion>
      </Flex>
    </Layout>
  );
};

export default Faq;
