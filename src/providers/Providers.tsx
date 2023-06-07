import { QeuryProvider } from './QueryProvider';
import { ModalProvider } from './ModalProvider';
import { AuthProvider } from './AuthProvider';
import { PropsWithChildren } from 'react';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QeuryProvider>
      <ModalProvider>
        <AuthProvider>{children}</AuthProvider>
      </ModalProvider>
    </QeuryProvider>
  );
};
