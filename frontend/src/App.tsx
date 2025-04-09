import io from 'socket.io-client';
import { Sidebar } from './components/sidebar';
io('http://localhost:3000')


function App() {
  return(
    <>
      <Sidebar />
      
    </>
  )
}

export default App;