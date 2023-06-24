import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { message } from 'antd';

import { private_axios } from 'utils/private_axios';
import { AdminForm } from '../../components/Form';
import { TFormValues, TImage } from '../../types/TFormValues';
import { ImageUploader } from '../../components/ImageUploader';
import { ReturnButton } from 'admin/components/ReturnButton';

export default function CreateProduct() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [fileList, setFileList] = useState<TImage[]>([]);

  const { mutateAsync } = useMutation(async (values: TFormValues) => {
    try {
      await private_axios.post(`/product`, values);
      queryClient.invalidateQueries();
      message.success('Product Created');
      navigate('/admin-panel');
    } catch (error: any) {
      message.error('Oops! something went wrong');
    }
  });

  const handleSubmit = async (values: TFormValues) => {
    const updatedValues = {
      ...values,
      images: fileList.map((item) => item.url),
    };
    await mutateAsync(updatedValues);
  };

  return (
    <>
      <div className='flex flex-col gap-5 m-auto py-5 px-10 min-w-[600px] w-fit bg-gray-100  border border-gray-300 rounded-lg'>
        <ReturnButton />
        <ImageUploader fileList={fileList} setFileList={setFileList} />
        <AdminForm handleSubmit={handleSubmit} />
      </div>
    </>
  );
}
