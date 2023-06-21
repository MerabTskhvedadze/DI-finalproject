import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button, Upload, Image, Form, Input } from 'antd';
import { UploadOutlined, DeleteFilled } from '@ant-design/icons';
import { public_axios } from 'utils/public_axios';
import { Button as SubmitButton } from 'components/Button';

type TInitialValues = {
  title: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  amount: number;
  rating: number;
};

type TImage = {
  id: string;
  url: string;
};

function EditProduct() {
  const { id } = useParams();
  const { data, isError } = useQuery(['editProduct', id], async () => {
    const response = await public_axios.get(`/product/${id}`);
    return response.data;
  });

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

  const handleSubmit = (values: TInitialValues) => {
    const updatedValues = {
      ...values,
      images: fileList.map((item) => item.url),
    };
    console.log(updatedValues);
  };

  const handleFileDelete = (id: string) => {
    const updatedList = fileList.filter((file) => file.id !== id);
    setFileList(updatedList);
  };

  if (isError) {
    return <h1>Oops! something went wrong</h1>;
  }
  return (
    <div className='flex flex-col gap-10 lg:flex-row px-10 max-w-[1100px] m-auto'>
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
          label='Model'
          name='title'
          rules={[
            {
              required: true,
              message: 'Model is required',
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
          ]}
        >
          <Input />
        </Form.Item>
        <SubmitButton type='submit'>Submit</SubmitButton>
      </Form>

      <div className='max-w-[600px]  w-full mx-auto'>
        <div className='flex flex-wrap max-h-[300px] overflow-auto gap-1 mb-3'>
          {fileList.map((item) => (
            <div key={item.id} className='relative flex'>
              <Image
                className='rounded-lg border border-gray-300'
                src={item.url}
                width={100}
                height={100}
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
    </div>
  );
}

export default EditProduct;
