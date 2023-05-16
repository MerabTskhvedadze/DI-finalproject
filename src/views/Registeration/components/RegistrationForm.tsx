import { Form, Input } from 'antd';
import { ChangeEvent } from 'react';

import { Button } from 'components/Button';

export const RegistrationForm = () => {
  const onFinish = (values: ChangeEvent) => {
    console.log('Received values:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name='registrationForm'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='Name'
        name='name'
        rules={[
          {
            required: true,
            message: 'Please enter your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Email Address'
        name='email'
        rules={[
          {
            required: true,
            message: 'Please enter your email address!',
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
        <Button color='yellow' type='submit'>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
