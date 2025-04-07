import { ErrorInfo } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../components/error-fallback';

export const PrivateLayout = () => {
  const onError = (error: Error, info: ErrorInfo) => {
    console.error('error.message', error.message);
    console.error('info.componentStack:', info.componentStack);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={onError}>
      <Outlet />
    </ErrorBoundary>
  );
};