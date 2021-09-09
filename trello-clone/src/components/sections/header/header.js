import * as React from "react";
import { Flex, Center, Circle, Image, Button } from "@chakra-ui/react";

import Logo from "./logo";
import RightMenu from "./rightmenu";
import { AuthContext } from "../../../context/AuthContext";

const Header = () => {
  const auth = React.useContext(AuthContext);
  return (
    <Flex
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      bgColor="blue.300"
      pl={{ base: "15px", md: "40px" }}
      pr={{ base: "15px", md: "40px" }}
      h={{ base: "50px", md: "70px" }}
    >
      <Logo title="Trello-clone" />
      <Flex
        justifyContent={{ base: "space-between", md: "space-evenly" }}
        w={{ base: "150px", md: "200px" }}
      >
        <RightMenu logout={auth.logout} />
        <Image src="./logout.png" w={{ base: "25px", md: "30px" }} onClick={auth.logout} />
      </Flex>
    </Flex>
  );
};

export default Header;
