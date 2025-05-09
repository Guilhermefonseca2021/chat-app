import { Box, Link as ChakraLink, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { FiCoffee } from 'react-icons/fi';
import RoomList from './room-list';

export const Sidebar = () => {
  return (
    <Flex
      flexDir='column'
      w='240px'
      pr='10px'
      flexShrink={0}
      justifyContent='space-between'
    >
      <Box>
        <NavLink to='/'>
        <ChakraLink
          fontSize='3xl'
          fontWeight='700'
          color='purple.400'
          display='flex'
          alignItems='center'
          gap='8px'
          _hover={{ textDecoration: 'none', opacity: '.8' }}
        >
          <FiCoffee />
          Dev Chat
        </ChakraLink>
        </NavLink>
        <RoomList />
      </Box>
    </Flex>
  );
};