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
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";

const BoardModal = ({ isOpen, onClose, reload }) => {
  const [form, setForm] = React.useState({ title: "" });
  const { request } = useHttp();
  const auth = React.useContext(AuthContext);

  const createBoardHandler = async () => {
    try {
      const res = await request("api/board/add", "POST", { ...form, userId: auth.userId });
      console.log(res);
      reload(true);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
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
            name="title"
            id="title"
            onChange={changeHandler}
          ></Input>
        </ModalBody>
        <ModalFooter>
          <Button
            _focus={{
              boxShadow: "none",
            }}
            onClick={() => {
              createBoardHandler();
              onClose();
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
