import * as React from 'react'
import { Flex } from "@chakra-ui/react"

import Logo from "./logo"

const Header = () => {
    return (
        <Flex>
            <Logo title="Trello-clone"/>
        </Flex>
    )
}

export default Header;