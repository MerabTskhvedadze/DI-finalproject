import { Form, Input } from 'antd';
import { Button } from 'components/Button';
import { ChangeEvent } from 'react';

export default function LoginForm() {
  const onFinish = (values: ChangeEvent) => {
    console.log('Received values:', values);
  };

  return (
    <Form
      name='loginForm'
      onFinish={onFinish}
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        label='Email Address'
        name='email'
        rules={[
          { required: true, message: 'Please enter your email address' },
          { type: 'email', message: 'Please enter a valid email address' },
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
            message: 'Please enter your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type='submit' color='yellow'>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}
