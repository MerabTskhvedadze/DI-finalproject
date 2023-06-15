import { QeuryProvider } from './QueryProvider';
import { AuthProvider } from './AuthProvider';
import { CartProvider } from './CartProvider';
import { SearchProvider } from './SearchProvider';
import { PropsWithChildren } from 'react';
import { ProtectedProvider } from './ProtectedProvider';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QeuryProvider>
      <CartProvider>
        <SearchProvider>
          <AuthProvider>
            <ProtectedProvider>{children}</ProtectedProvider>
          </AuthProvider>
        </SearchProvider>
      </CartProvider>
    </QeuryProvider>
  );
};
