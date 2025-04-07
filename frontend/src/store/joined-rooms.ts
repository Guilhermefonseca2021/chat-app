import { create } from 'zustand';
import { useErrorBoundary } from 'react-error-boundary';
import { getUserRoomsApi } from '../_api/user/get-user-room';
import { UserRoomType } from '../@types/user';

type JoinedRoomsStore = {
  joinedRooms: UserRoomType[];
  setJoinedRooms: (joinedRooms: UserRoomType[]) => void;
  getUserJoinedRooms: () => Promise<void>;
  isLoading: boolean;
};

export const useJoinedRoomsStore = create<JoinedRoomsStore>()((set) => ({
  joinedRooms: [],
  setJoinedRooms: (joinedRooms) => set({ joinedRooms: joinedRooms }),
  getUserJoinedRooms: async () => {
    await getUserRoomsApi()
      .then((res) => set({ joinedRooms: res.data }))
      .catch((error) => {
        useErrorBoundary().showBoundary(error);
      })
      .finally(() => set({ isLoading: false }));
  },
  isLoading: true,
}));