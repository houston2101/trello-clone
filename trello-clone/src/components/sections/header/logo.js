import * as React from 'react'

import { Text, Center } from "@chakra-ui/react"

const Logo = ({title}) => {
    return(
    <Center>
        <Text>{title}</Text>
    </Center>
    )
}

export default Logo;