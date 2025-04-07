import {
  Container,
  VStack,
  Heading,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { FallbackProps } from 'react-error-boundary';
import { isErrorWithMessage } from '../utils/error-type-guard';
import { NavLink } from 'react-router-dom';

export const ErrorFallback = ({ error }: FallbackProps) => {
  const message = isErrorWithMessage(error)
    ? error.response?.data.message
    : 'An error occurred';

  return (
    <Container maxW={{ base: '100%', lg: 'container.lg' }} h='100vh'>
      <VStack justify='center' align='center' gap='30px' h='100%'>
        <Heading as='h1'>Oops!</Heading>
        <Text fontSize='xl'>Sorry.. {message}</Text>
        <NavLink to={'/'}>
          <ChakraLink
            fontSize='xl'
            color='purple.400'
            _hover={{ color: 'purple.300' }}
          >
            Go To Top
          </ChakraLink>
        </NavLink>
      </VStack>
    </Container>
  );
};