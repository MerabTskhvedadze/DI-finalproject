import { useTranslation } from 'react-i18next';
import { Form, Input } from 'antd';
import { Button } from 'components/Button';
import { FormValues } from '../types/FormValues';

type RegistrationFormProps = {
  register: (values: FormValues) => void;
};

export const RegistrationForm = ({ register }: RegistrationFormProps) => {
  const { t } = useTranslation('register');
  const onFinish = (values: FormValues) => {
    register(values);
  };

  return (
    <Form name='registrationForm' onFinish={onFinish}>
      <Form.Item
        label={t('firstName')}
        name={t('firstName')}
        rules={[
          {
            required: true,
            message: t('requireFirstName'),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('lastName')}
        name={t('lastName')}
        rules={[
          {
            required: true,
            message: t('requireLastName'),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('phoneNumber')}
        name={t('phoneNumber')}
        rules={[
          { required: true, message: t('requirePhoneNumber') },
          {
            pattern: /^\+(?:[0-9]?){6,14}[0-9]$/,
            message: t('validatePhoneNumber'),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('email')}
        name={t('email')}
        rules={[
          {
            required: true,
            message: t('requireEmail'),
          },
          {
            type: 'email',
            message: t('validateEmail'),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('password')}
        name={t('password')}
        rules={[
          {
            required: true,
            message: t('validatePassword'),
          },
          {
            min: 6,
            message: t('validatePassword'),
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type='submit'>{t('register')}</Button>
      </Form.Item>
    </Form>
  );
};
