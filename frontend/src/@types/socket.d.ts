import { Socket } from 'socket.io-client';

const objt = new Object();
type ServerToClientEvents = objt;

type ServerToClientEvents = {
  new_message: (message: MessageType) => void;
  send_message_error: (error: { message: string }) => void;
};

type ClientToServerEvents = {
  join_chat: ({
    userId,
    roomId,
    username,
  }: {
    userId: number;
    roomId: number;
    username: string;
  }) => void;
  
  send_message: ({
    message,
    userId,
    roomId,
  }: {
    message: string;
    userId: number;
    roomId: number;
  }) => void;


  leave_chat: ({ userId, roomId }: { userId: number; roomId: number }) => void;
}

export type CustomSocket = Socket<ServerToClientEvents, ClientToServerEvents>;