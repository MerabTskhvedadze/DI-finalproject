import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { v4 as uuidv4 } from 'uuid';

import { public_axios } from 'utils/public_axios';
import { private_axios } from 'utils/private_axios';

import { Button as SubmitButton } from 'components/Button';
import { Button, Upload, Image, Form, Input, message } from 'antd';
import { UploadOutlined, DeleteFilled } from '@ant-design/icons';

type TInitialValues = {
  title: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  amount: number;
  rating: number;
  id?: string;
  images?: string[];
};

type TImage = {
  id: string;
  url: string;
};

function EditProduct() {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  //get product
  const { data, isError } = useQuery(['editProduct', productId], async () => {
    const response = await public_axios.get(`/product/${productId}`);
    return response.data;
  });

  //update product
  const { mutate } = useMutation(
    async (values: TInitialValues) => {
      try {
        await private_axios.put(`/product/${productId}`, values);
      } catch (error: any) {
        return error;
      }
    },
    {
      onSuccess: () => {
        message.success('Product Updated');
        queryClient.invalidateQueries();
        navigate('/admin-panel');
      },
      onError: (error: any) => {
        message.error(error.response.data);
      },
    }
  );

  const [fileList, setFileList] = useState<TImage[]>(() =>
    data?.images.map((url: string) => ({ id: uuidv4(), url }))
  );

  const initialValues: TInitialValues = {
    amount: data?.amount,
    brand: data?.brand,
    title: data?.title,
    category: data?.category,
    description: data?.description,
    price: data?.price,
    rating: data?.rating,
  };

  const handleFileChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const fileUrl = e.target?.result as string;

      setFileList((prevFileList) => [
        ...prevFileList,
        { id: uuidv4(), url: fileUrl },
      ]);
    };
    reader.readAsDataURL(file);
  };

  const handleFileDelete = (id: string) => {
    const updatedList = fileList.filter((file) => file.id !== id);
    setFileList(updatedList);
  };

  const handleSubmit = (values: TInitialValues) => {
    const updatedValues = {
      ...values,
      images: fileList.map((item) => item.url),
      id: productId,
    };
    mutate(updatedValues);
  };

  if (isError) {
    return <h1>Oops! something went wrong</h1>;
  }
  return (
    <div className='flex flex-col gap-5 m-auto py-5 px-10 min-w-[600px] w-fit bg-gray-100  border border-gray-300 rounded-lg'>
      <div className='max-w-[500px]'>
        <div className='flex flex-wrap justify-center max-h-[300px] overflow-auto gap-1 mb-3'>
          {fileList.map((item) => (
            <div key={item.id} className='relative'>
              <Image
                className='rounded-lg border border-gray-300'
                src={item.url}
                width={80}
                height={80}
              />
              <DeleteFilled
                onClick={() => handleFileDelete(item.id)}
                className='absolute w-5 h-5 cursor-pointer top-1 left-0 text-red-500 hover:text-red-300'
              />
            </div>
          ))}
        </div>
        <Upload beforeUpload={handleFileChange} showUploadList={false}>
          <Button icon={<UploadOutlined />} className='flex items-center mb-2'>
            Select Image
          </Button>
        </Upload>
      </div>

      <Form
        initialValues={initialValues}
        onFinish={handleSubmit}
        labelCol={{ span: 24 }}
        className='max-w-[600px] w-full m-auto'
      >
        <Form.Item
          label='Amount'
          name='amount'
          rules={[
            {
              required: true,
              message: 'Amount is required',
            },
            {
              pattern: /^\d*\.?\d+$/,
              message: 'Please enter a valid number',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Brand'
          name='brand'
          rules={[
            {
              required: true,
              message: 'Brand is required',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Title'
          name='title'
          rules={[
            {
              required: true,
              message: 'Title is required',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Category'
          name='category'
          rules={[
            {
              required: true,
              message: 'Category is required',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Description'
          name='description'
          rules={[
            {
              required: true,
              message: 'Description is required',
            },
          ]}
        >
          <Input.TextArea style={{ minHeight: '300px' }} />
        </Form.Item>
        <Form.Item
          label='Price'
          name='price'
          rules={[
            {
              required: true,
              message: 'Price is required',
            },
            {
              pattern: /^\d*\.?\d+$/,
              message: 'Please enter a valid number',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <SubmitButton type='submit'>Submit</SubmitButton>
      </Form>
    </div>
  );
}

export default EditProduct;
