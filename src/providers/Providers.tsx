import { QeuryProvider } from './QueryProvider';
import { AuthProvider } from './AuthProvider';
import { CartProvider } from './CartProvider';
import { ModalProvider } from './ModalProvider';
import { PropsWithChildren } from 'react';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QeuryProvider>
      <ModalProvider>
        <CartProvider>
          <AuthProvider>{children}</AuthProvider>
        </CartProvider>
      </ModalProvider>
    </QeuryProvider>
  );
};
