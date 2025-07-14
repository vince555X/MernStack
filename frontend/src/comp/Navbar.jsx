import { Container, Flex } from '@chakra-ui/react';
import React from 'react'

export const Navbar = () => {
  return <Container maxW={"1200px"} py={4}>
    <Flex 
      h={16}
      justifyContent={"space-between"} 
      alignItems={"center"}
      flexDir={{
        base: "column",
        sm: "row"
      }}
    >

    </Flex>
  </Container>
};
