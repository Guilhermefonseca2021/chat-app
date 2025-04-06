import { Server } from "socket.io";

const socketIoHandler = (io: Server) => {
    io.on('connect', (socket) => {
      console.log(`Client connected with id: ${socket.id}`);
      
      socket.on('join_chat', async (data) => {
        const { roomId } = data;
        socket.join(roomId);
      });
  
      socket.on('disconnect', () =>
        console.log(`Client disconnected with id: ${socket.id}`)
      );

    });
};

export default socketIoHandler;