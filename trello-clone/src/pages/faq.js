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

const Faq = () => {
  return (
    <Flex justifyContent="center">
      <Text fontSize={{ base: "32px", md: "48px" }}>Frequently asked questions</Text>
      <Accordion>
        <AccordionItem>
          <AccordionButton></AccordionButton>
          <AccordionIcon></AccordionIcon>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default Faq;
