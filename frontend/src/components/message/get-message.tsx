import { MessageType } from '@/@types/message';
import { AxiosResponse } from 'axios';
import baseServer from '../../_api/base'

export const getMessagesApi: (
  roomId: string
) => Promise<AxiosResponse<MessageType[]>> = async (roomId) => {
  const res = await baseServer.get(`/messages?roomId=${roomId}`);
  return res;
};