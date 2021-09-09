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
  Textarea,
  Input,
} from "@chakra-ui/react";

import { useHttp } from "../hooks/http.hook";

const CardModal = ({ boardId, isOpen, onClose, update }) => {
  const { request } = useHttp();
  const [card, setCard] = React.useState({
    title: "",
    description: "",
  });

  const changeHandler = (event) => {
    setCard({ ...card, [event.target.name]: event.target.value });
  };

  const addCardHandler = async () => {
    try {
      const data = await request("/api/card/add", "POST", { id: boardId, cardInfo: card });
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
          Add new card
          <ModalCloseButton
            _focus={{
              boxShadow: "none",
            }}
          />
        </ModalHeader>

        <ModalBody display="flex" alignItems="center" flexDir="column">
          <Input
            placeholder="Card name"
            fontSize={["xs", "xs", "xs", "s"]}
            borderRadius="15px"
            bgColor="#dcdcdc"
            border="none"
            mb="25px"
            _focus={{
              boxShadow: "none",
            }}
            name="title"
            onChange={changeHandler}
          ></Input>
          <Textarea
            placeholder="Card description"
            name="description"
            onChange={changeHandler}
          ></Textarea>
        </ModalBody>
        <ModalFooter>
          <Button
            _focus={{
              boxShadow: "none",
            }}
            onClick={() => {
              addCardHandler();
              onClose();
            }}
          >
            Create card
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CardModal;
