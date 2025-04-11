import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useErrorBoundary } from 'react-error-boundary';
import { toaster } from "@/components/ui/toaster"
import { MessageType } from '@/@types/message';
import { useSocketStore } from '@/store/socket';
import { getMessagesApi } from './get-message';

type MessageDisplayType = {
  username: string;
  imageIcon: string | null;
  time: string;
  message: string;
};

export const useDisplayMessages = (
  messagesPanelRef: React.RefObject<HTMLDivElement>
) => {
  const { roomId } = useParams();
  const { showBoundary } = useErrorBoundary();
  const socket = useSocketStore((state) => state.socket);

  const [messages, setMessages] = useState<MessageDisplayType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        if (roomId) {
          setIsLoading(true);
          const { data } = await getMessagesApi(roomId);
          const displayMessages = data.map((message: MessageType) => {
            return {
              username: message.username,
              imageIcon: message.image_icon,
              time: message.created_at,
              message: message.message,
            };
          });

          displayMessages.sort((a, b) => {
            return new Date(a.time).getTime() - new Date(b.time).getTime();
          });

          setMessages(displayMessages);
          setIsLoading(false);
        }
      } catch (error) {
        showBoundary(error);
      }
    };

    fetchMessages();
  }, [showBoundary, roomId]);

  useEffect(() => {
    if (!socket) return;

    socket.on('new_message', (message: MessageType) => {
      setMessages((prevMessages) => {
        return [
          ...prevMessages,
          {
            username: message.username,
            imageIcon: message.image_icon,
            time: message.created_at,
            message: message.message,
          },
        ];
      });
    });

    return () => {
      socket.off('new_message');
    };
  }, [socket, roomId]);

  useEffect(() => {
    socket.on('send_message_error', (error: Error) => {
      toaster.create({
        title: 'Erro ao enviar mensagem',
        description: error.message,
        duration: 5000,
        type: "error",
      });
    })

    return () => {
      socket.off('send_message_error');
    };
  }, [socket, toaster]);

  useEffect(() => {
    if (!messagesPanelRef.current) return;
    messagesPanelRef.current.scrollTop = messagesPanelRef.current.scrollHeight;
  }, [messages, messagesPanelRef]);

  return {
    messages,
    isLoading,
  };
};
