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
      <ModalContent>
        <ModalHeader>
          Add new card
          <ModalCloseButton />
        </ModalHeader>

        <ModalBody display="flex" alignItems="center">
          <Input
            placeholder="Card name"
            fontSize={["xs", "xs", "xs", "s"]}
            borderRadius="15px"
            bgColor="#dcdcdc"
            border="none"
            _focus={{
              boxShadow: "none",
            }}
          ></Input>
          <Textarea></Textarea>
        </ModalBody>
        <ModalFooter>
          <Button>Create card</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CardModal;
