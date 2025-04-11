import io from 'socket.io-client';
import { Sidebar } from './components/sidebar';
import { MessageHeader } from './components/message/header';
import { MessageInput } from './components/message/input';
io('http://localhost:3000')


function App() {
  return(
    <div className="">
      <Sidebar />
      <MessageHeader />
      <MessageInput />
    </div>
  )
}

export default App;