import { LinkasReactRouterLink, useNavigate } from 'react-router-dom';
import {
  Container,
  VStack,
  Heading,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { FallbackProps } from 'react-error-boundary';
import { isErrorWithMessage } from '../utils/error-type-guard';

export const ErrorFallback = ({ error }: FallbackProps) => {
  const message = isErrorWithMessage(error)
    ? error.response?.data.message
    : 'An error occurred';

  return (
    <Container maxW={{ base: '100%', lg: 'container.lg' }} h='100vh'>
      <VStack justify='center' align='center' gap='30px' h='100%'>
        <Heading as='h1'>Oops!</Heading>
        <Text fontSize='xl'>Sorry.. {message}</Text>
        <ChakraLink
          as={ReactRouterLink}
          fontSize='xl'
          color='purple.400'
          _hover={{ color: 'purple.300' }}
        >
          Go To Top
        </ChakraLink>
      </VStack>
    </Container>
  );
};