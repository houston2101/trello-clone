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

const CardOpenModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent flexDir="column">
        <ModalHeader>
          Card title
          <ModalCloseButton
            _focus={{
              boxShadow: "none",
            }}
          />
        </ModalHeader>

        <ModalBody>
          Description of your card Description of your card Description of your card Description of
          your card Description of your card Description of your card Description of your card
        </ModalBody>
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
          >
            Delete card
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CardOpenModal;
