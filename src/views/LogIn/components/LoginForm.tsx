import { useTranslation } from 'react-i18next';
import { Form, Input } from 'antd';
import { Button } from 'components/Button';
import { FormValues } from '../types/FormValues';

type LoginFormProps = {
  login: (values: FormValues) => void;
};

export const LoginForm = ({ login }: LoginFormProps) => {
  const { t } = useTranslation('login');
  const onFinish = (values: FormValues) => {
    login(values);
  };

  return (
    <Form name='loginForm' onFinish={onFinish}>
      <Form.Item
        label={t('email')}
        name='email'
        rules={[{ required: true, message: t('requireEmail') }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('password')}
        name='password'
        rules={[
          {
            required: true,
            message: t('requirePassword'),
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type='submit'>{t('login')}</Button>
      </Form.Item>
    </Form>
  );
};
