import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSocketStore } from '../store/socket';
import { useJoinedRoomsStore } from '../store/joined-rooms';
import { useCurrentRoomStore } from '../store/current-rooms';

export const useSetCurrentRoom = () => {
  const { roomId } = useParams();

  const socket = useSocketStore((state) => state.socket);
  const currentUser = {
    id: 1,
    username: 'test_user',
    image_icon: null
  }; 

  const joinedRooms = useJoinedRoomsStore((state) => state.joinedRooms);
  const setCurrentRoom = useCurrentRoomStore((state) => state.setCurrentRoom);

  useEffect(() => {
    if (roomId) {
      const selectedRoomId = parseInt(roomId, 10);
      const room = joinedRooms.find(
        (joinedRoom) => joinedRoom.id === selectedRoomId
      );

      if (room) {
        setCurrentRoom(room);
      }

      if (currentUser) {
        socket.emit('join_chat', {
          userId: currentUser.id,
          roomId: Number(roomId),
          username: currentUser.username,
        });
      }
    }

    return () => {
      if (socket && currentUser && roomId) {
        socket.emit('leave_chat', {
          userId: currentUser.id,
          roomId: Number(roomId),
        });
      }
    };
  }, [roomId, setCurrentRoom, joinedRooms, currentUser, socket]);
};