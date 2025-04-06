import { Heading } from '@chakra-ui/react';
import io from 'socket.io-client';

io('http://localhost:3000')

function App() {
  return (
    <div>
      <Heading>Hello World!</Heading>
    </div>
  );
}

export default App;