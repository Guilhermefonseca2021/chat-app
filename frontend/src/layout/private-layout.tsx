import { ErrorInfo, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../components/error-fallback';
import { useSetCurrentRoom } from '../hooks/use-set-current-room';
import { useJoinedRoomsStore } from '../store/joined-rooms';

export const PrivateLayout = () => {
  const onError = (error: Error, info: ErrorInfo) => {
    console.error('error.message', error.message);
    console.error('info.componentStack:', info.componentStack);
  };

  const getUserJoinedRooms = useJoinedRoomsStore(
      (state) => state.getUserJoinedRooms
    );
    useEffect(() => {
      getUserJoinedRooms();
    }, [getUserJoinedRooms]);
  
    useSetCurrentRoom();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={onError}>
      <Outlet />
    </ErrorBoundary>
  );
};