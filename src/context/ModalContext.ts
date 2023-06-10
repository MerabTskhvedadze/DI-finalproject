import { createContext } from 'react';

type ModalContextValues = {
  isModalOpen: boolean;
  showModal: () => void;
  handleCancel: () => void;
};

export const ModalContext = createContext<ModalContextValues>({
  isModalOpen: false,
  showModal: () => {},
  handleCancel: () => {},
});
