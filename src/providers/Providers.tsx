import { QeuryProvider } from './QueryProvider';
import { AuthProvider } from './AuthProvider';
import { CartProvider } from './CartProvider';
import { SearchProvider } from './SearchProvider';
import { PropsWithChildren } from 'react';
import { AccessProvider } from './AccessProvider';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QeuryProvider>
      <CartProvider>
        <SearchProvider>
          <AuthProvider>
            <AccessProvider>{children}</AccessProvider>
          </AuthProvider>
        </SearchProvider>
      </CartProvider>
    </QeuryProvider>
  );
};
