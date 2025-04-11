import { MessageType } from '@/@types/message';
import baseServer from '../base';
import { AxiosResponse } from 'axios';

export const getMessagesApi: (
  roomId: string
) => Promise<AxiosResponse<MessageType[]>> = async (roomId) => {
  const res = await baseServer.get(`/messages?roomId=${roomId}`);
  return res;
};