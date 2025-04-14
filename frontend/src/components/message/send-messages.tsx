import { KeyboardEvent } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useCurrentRoomStore } from '@/store/current-rooms';
import { messageSchema, MessageSchemaType } from './message';
import { useSocketStore } from '@/store/socket';

export const useSendMessage = () => {
  const socket = useSocketStore((state) => state.socket);
  const currentRoom = useCurrentRoomStore((state) => state.currentRoom);
  const currentUser = {
    id: 1,
    username: 'test_user',
    image_icon: null
  }; 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MessageSchemaType>({
    resolver: zodResolver(messageSchema),
  });

  const sendMessage = (data: MessageSchemaType) => {
    if (currentRoom && currentUser) {
      socket.emit('send_message', {
        message: data.message,
        userId: currentUser.id,
        roomId: currentRoom.id,
      });

      reset();
    }
  };

  const sendMessageEnterHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(sendMessage)();
    }
  };

  return {
    register,
    sendMessageEnterHandler,
    onSendMessageSubmit: handleSubmit((d) => sendMessage(d)),
    errors,
    reset,
  };
};