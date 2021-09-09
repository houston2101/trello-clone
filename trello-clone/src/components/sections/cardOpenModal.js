import * as React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/http.hook";

const CardOpenModal = ({ update, el, isOpen, onClose }) => {
  const { id } = useParams();
  const { request } = useHttp();

  const deleteCardHandler = async () => {
    try {
      await request("/api/card/delete", "POST", { boardId: id, cardId: el.id, column: el.column });
      update(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent flexDir="column">
        <ModalHeader>
          {el.title}
          <ModalCloseButton
            _focus={{
              boxShadow: "none",
            }}
          />
        </ModalHeader>

        <ModalBody>{el.description}</ModalBody>
        <ModalFooter>
          <Button
            fontSize={["xs", "xs", "xs", "s"]}
            bgColor="red.100"
            borderRadius="15px"
            mt="auto"
            fontWeight="400"
            _hover={{
              bgColor: "#BE6161",
            }}
            _focus={{
              boxShadow: "none",
            }}
            onClick={deleteCardHandler}
          >
            Delete card
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CardOpenModal;
