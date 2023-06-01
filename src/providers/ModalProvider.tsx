import { useState, PropsWithChildren } from 'react';
import { ModalContext } from 'context/ModalContext';

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, showModal, handleCancel }}>
      {children}
    </ModalContext.Provider>
  );
};
