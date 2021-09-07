import * as React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  ModalHeader,
} from "@chakra-ui/react";

const BoardModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Add new board
          <ModalCloseButton
            _focus={{
              boxShadow: "none",
            }}
          />
        </ModalHeader>

        <ModalBody display="flex" alignItems="center">
          <Input
            placeholder="Board name"
            fontSize={["xs", "xs", "xs", "s"]}
            borderRadius="15px"
            bgColor="#dcdcdc"
            border="none"
            _focus={{
              boxShadow: "none",
            }}
          ></Input>
        </ModalBody>
        <ModalFooter>
          <Button
            _focus={{
              boxShadow: "none",
            }}
          >
            Create board
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BoardModal;
