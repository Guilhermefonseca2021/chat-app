import { AxiosResponse } from 'axios';
import baseServer from '../base';
import { UserRoomType } from '../../@types/user';

export const getUserRoomsApi: () => Promise<
  AxiosResponse<UserRoomType[]>
> = async () => {
  const res = await baseServer.get('/user/rooms');
  return res;
};