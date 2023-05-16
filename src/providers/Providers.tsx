import { ModalProvider } from './ModalProvider/ModalProvider';
import { PropsWithChildren } from 'react';

export const Providers = ({ children }: PropsWithChildren) => {
  return <ModalProvider>{children}</ModalProvider>;
};
