import { Image, Flex, Button,  HStack , VStack , chakra, Text, Box} from '@chakra-ui/react';
import Logo from '../public/logo.svg';
import {Link} from 'react-scroll'
import { data } from './header.data'
import React from "react";
const title = "Smash Devs"
const subTitle = "Desenvolvendo para um mundo melhor"

export default function Header() {
  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="1"
        align="center"
        justify="space-between"
      >
        <HStack>
          <Flex>
            <VStack alignItems="left" m="0" p="0" spacing='0'>
              <Box>
                <Text fontFamily="'Popins',devanagari,latin,latin-ext" fontSize="xl" textAlign="left" fontWeight="bold">{title}</Text>
              </Box>
              <Box>
                <Text fontSize="xs" color="#666">{subTitle}</Text>
              </Box>
            </VStack>
          </Flex>
        </HStack>
        <HStack as="nav" spacing="5">
          {data.map((item, i) => (
            <Link key={i} to={item.href}>
              <Button variant="link" fontWeight="normal" fontSize="sm"> {item.label} </Button>
            </Link>
          ))}
        </HStack>
      </Flex>
    </chakra.header>
  );
}