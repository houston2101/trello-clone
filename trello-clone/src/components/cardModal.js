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

const CardModal = ({ isOpen, onClose }) => {
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
          ></Input>
          <Textarea placeholder="Card description"></Textarea>
        </ModalBody>
        <ModalFooter>
          <Button
            _focus={{
              boxShadow: "none",
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
