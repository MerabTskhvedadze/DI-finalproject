import { Button as SubmitButton } from 'components/Button';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { private_axios } from 'utils/private_axios';
import { message, Image, Upload, Button, Form, Input } from 'antd';
import { UploadOutlined, DeleteFilled } from '@ant-design/icons';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type TValues = {
  title: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  amount: number;
  rating: number;
  id: string;
  images: string[];
};

type TImage = {
  id: string;
  url: string;
};

export default function CreateProduct() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [fileList, setFileList] = useState<TImage[]>([]);

  const { mutate } = useMutation(
    async (values: TValues) => {
      const headers = {
        'Content-Type': 'application/json',
      };
      try {
        await private_axios.post(`/product`, values, { headers });
      } catch (error: any) {
        return error;
      }
    },
    {
      onSuccess: () => {
        message.success('Product Created');
        queryClient.invalidateQueries();
        navigate('/admin-panel');
      },
      onError: (error: any) => {
        message.error(error.response.data);
      },
    }
  );

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

  const handleSubmit = (values: TValues) => {
    const updatedValues = {
      ...values,
      images: fileList.map((item) => item.url),
    };
    mutate(updatedValues);
  };

  return (
    <div className='flex flex-col gap-5 m-auto py-5 px-10 min-w-[600px] w-fit bg-gray-100  border border-gray-300 rounded-lg'>
      <div className='max-w-[500px]'>
        <div className='flex flex-wrap justify-center max-h-[300px] overflow-auto gap-1 mb-3'>
          {fileList.map((item) => (
            <div key={item.id} className='relative flex'>
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
          <Button icon={<UploadOutlined />} className='flex items-center mb-1'>
            Select Image
          </Button>
        </Upload>
      </div>

      <Form onFinish={handleSubmit} labelCol={{ span: 24 }} className='w-full'>
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
          <Input.TextArea style={{ minHeight: '150px' }} />
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
        <SubmitButton type='submit'>Create</SubmitButton>
      </Form>
    </div>
  );
}
