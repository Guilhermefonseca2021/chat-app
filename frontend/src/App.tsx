import { ChakraProvider, Heading } from '@chakra-ui/react';
import customTheme from './theme';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Heading>Hello World!</Heading>
    </ChakraProvider>
  );
}

export default App;