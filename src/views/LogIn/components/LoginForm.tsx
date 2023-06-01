import { Form, Input } from 'antd';
import { Button } from 'components/Button';
import { UseMutateFunction } from 'react-query';
import { FormValues } from '../types/FormValues';
import { responseData } from '../types/responseData';

type LoginFormProps = {
  loginUser: UseMutateFunction<responseData, any, FormValues, unknown>;
};

export const LoginForm = ({ loginUser }: LoginFormProps) => {
  const onFinish = (values: FormValues) => {
    loginUser(values);
  };

  return (
    <Form name='loginForm' onFinish={onFinish}>
      <Form.Item
        label='Email'
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
};
