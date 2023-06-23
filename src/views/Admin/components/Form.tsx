import { Input, Form } from 'antd';
import { Button } from 'components/Button';
import { TFormValues } from '../types/TFormValues';

type AdminFormProps = {
  handleSubmit: (values: TFormValues) => void;
  initialValues?: TFormValues;
};

export const AdminForm = ({ handleSubmit, initialValues }: AdminFormProps) => {
  return (
    <Form
      onFinish={handleSubmit}
      labelCol={{ span: 24 }}
      className='w-full'
      initialValues={initialValues}
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
      <Button type='submit'>Create</Button>
    </Form>
  );
};
