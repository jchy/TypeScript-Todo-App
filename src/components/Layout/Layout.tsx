import { Box, Flex, VStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = (props: Props) => {
  return (
    <Box>
      <Flex>
        <VStack w="10rem" h="calc(100vh - 30px)" border="1px solid black" align="left" justify="start">
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </VStack>
        <Box p="1rem" w="full">{props.children}</Box>
      </Flex>
    </Box>
  );
};

export default Layout;
