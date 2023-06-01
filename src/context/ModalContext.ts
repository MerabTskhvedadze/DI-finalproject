import { createContext } from 'react';

type ModalContextProps = {
  isModalOpen: boolean;
  showModal: () => void;
  handleCancel: () => void;
};

export const ModalContext = createContext<ModalContextProps>({
  isModalOpen: false,
  showModal: () => {},
  handleCancel: () => {},
});
