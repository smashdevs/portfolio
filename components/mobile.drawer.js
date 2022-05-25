import { useDisclosure, Flex, Box, Button,  VStack, Icon, HStack, Link as ChakraLink } from "@chakra-ui/react";
import Drawer from './drawer';
import {  IoMdMenu } from 'react-icons/io';
import { Link } from 'react-scroll';
import { data } from './header.data';
import React from "react";
export default function MobileDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
return (
    <Flex >
      <Button ref={btnRef} onClick={onOpen}>
        <IoMdMenu size="26px" />
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <VStack alignItems="left">
          {data.map((item, i) => (
            <Link key={i}>
              <Button variant='text' > {item.label} </Button>
            </Link>
          ))}
        </VStack>
      </Drawer>
    </Flex>
  );
};