import { useContext } from 'react';
import { ModalContext } from 'context/ModalContext';

import { Modal } from 'antd';

type ModalComponentProps = {
  message: string;
  title: string;
};

export const ModalComponent = ({ message, title }: ModalComponentProps) => {
  const { isModalOpen, handleCancel } = useContext(ModalContext);

  return (
    <div>
      <Modal
        title={title}
        open={isModalOpen}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <p>{message}</p>
      </Modal>
    </div>
  );
};
