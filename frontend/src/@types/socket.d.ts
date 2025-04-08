import { Socket } from 'socket.io-client';

const objt = new Object();
type ServerToClientEvents = objt;

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

  leave_chat: ({ userId, roomId }: { userId: number; roomId: number }) => void;
}

export type CustomSocket = Socket<ServerToClientEvents, ClientToServerEvents>;