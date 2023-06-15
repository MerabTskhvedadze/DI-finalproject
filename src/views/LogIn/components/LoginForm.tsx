import { Form, Input } from 'antd';
import { Button } from 'components/Button';
import { FormValues } from '../types/FormValues';

type LoginFormProps = {
  login: (values: FormValues) => void;
};

export const LoginForm = ({ login }: LoginFormProps) => {
  const onFinish = (values: FormValues) => {
    login(values);
  };

  return (
    <Form name='loginForm' onFinish={onFinish}>
      <Form.Item
        label='Email'
        name='email'
        rules={[{ required: true, message: 'Please enter your email' }]}
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
        <Button type='submit'>Log in</Button>
      </Form.Item>
    </Form>
  );
};
