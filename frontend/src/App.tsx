import io from 'socket.io-client';
import { Sidebar } from './components/sidebar';
import RoomList from './components/room-list';
io('http://localhost:3000')

function App() {
  return(
    <div>
      <Sidebar />
      <RoomList />
    </div>
  )
}

export default App;