import { ModalProvider } from './ModalProvider';
import { AuthProvider } from './AuthProvider';
import { PropsWithChildren } from 'react';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ModalProvider>
      <AuthProvider>{children}</AuthProvider>
    </ModalProvider>
  );
};
