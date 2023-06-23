import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { v4 as uuidv4 } from 'uuid';

import { public_axios } from 'utils/public_axios';
import { private_axios } from 'utils/private_axios';

import { message } from 'antd';
import { TFormValues, TImage } from '../types/TFormValues';
import { AdminForm } from '../components/Form';
import { ImageUploader } from '../components/ImageUploader';

function EditProduct() {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  //get product
  const { data, isError } = useQuery(['editProduct', productId], async () => {
    const response = await public_axios.get(`/product/${productId}`);
    return response.data;
  });

  const [fileList, setFileList] = useState<TImage[]>(
    data?.images.map((url: string) => ({ id: uuidv4(), url })) || []
  );

  //update product
  const { mutateAsync } = useMutation(async (values: TFormValues) => {
    try {
      await private_axios.put(`/product/${productId}`, values);
      message.success('Product Updated');
      queryClient.invalidateQueries();
      navigate('/admin-panel');
    } catch (error: any) {
      message.error('Oops! something went wrong');
    }
  });

  const handleSubmit = async (values: TFormValues) => {
    const updatedValues = {
      ...values,
      images: fileList.map((item) => item.url),
      id: productId,
    };
    await mutateAsync(updatedValues);
  };

  if (isError) {
    return <h1>Oops! something went wrong</h1>;
  }
  return (
    <div className='flex flex-col gap-5 m-auto py-5 px-10 min-w-[600px] w-fit bg-gray-100  border border-gray-300 rounded-lg'>
      <ImageUploader fileList={fileList} setFileList={setFileList} />
      <AdminForm
        initialValues={{
          amount: data?.amount,
          brand: data?.brand,
          title: data?.title,
          category: data?.category,
          description: data?.description,
          price: data?.price,
          rating: data?.rating,
        }}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default EditProduct;
