import { QeuryProvider } from './QueryProvider';
import { AuthProvider } from './AuthProvider';
import { CartProvider } from './CartProvider';
import { SearchProvider } from './SearchProvider';
import { PropsWithChildren } from 'react';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QeuryProvider>
      <CartProvider>
        <SearchProvider>
          <AuthProvider>{children}</AuthProvider>
        </SearchProvider>
      </CartProvider>
    </QeuryProvider>
  );
};
