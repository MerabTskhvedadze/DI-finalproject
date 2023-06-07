import { UseMutateFunction } from 'react-query';
import { Form, Input } from 'antd';
import { Button } from 'components/Button';
import { FormValues } from '../types/FormValues';

type RegistrationFormProps = {
  registerUser: UseMutateFunction<void, any, FormValues, unknown>;
};

export const RegistrationForm = ({ registerUser }: RegistrationFormProps) => {
  const onFinish = (values: FormValues) => {
    registerUser(values);
  };

  return (
    <Form name='registrationForm' onFinish={onFinish}>
      <Form.Item
        label='Firstname'
        name='firstName'
        rules={[
          {
            required: true,
            message: 'Please enter your firstname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Lastname'
        name='lastName'
        rules={[
          {
            required: true,
            message: 'Please enter your lastname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Phone Number'
        name='phoneNumber'
        rules={[
          { required: true, message: 'Please enter your phone number' },
          {
            pattern: /^\+(?:[0-9]?){6,14}[0-9]$/,
            message: 'Please enter a valid phone number',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Email'
        name='email'
        rules={[
          {
            required: true,
            message: 'Please enter your email!',
          },
          {
            type: 'email',
            message: 'Please enter a valid email address!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Password'
        name='password'
        rules={[
          {
            required: true,
            message: 'Please enter a password!',
          },
          {
            min: 6,
            message: 'Password must be at least 6 characters long!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type='submit'>Register</Button>
      </Form.Item>
    </Form>
  );
};
