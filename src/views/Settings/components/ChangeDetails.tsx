import { useTranslation } from 'react-i18next';
import { Form, Input, message } from 'antd';
import { Button } from 'components/Button';
import { useMutation, useQueryClient } from 'react-query';
import { private_axios } from 'utils/private_axios';

export const ChangeDetails = () => {
  const { t } = useTranslation('settings');
  const queryClient = useQueryClient();
  const { mutate } = useMutation(async (values) => {
    try {
      await private_axios.post('/user', values);
      queryClient.invalidateQueries('profile');
      message.success('Saved successfully');
    } catch {
      message.error('Oops! something went wrong');
    }
  });

  return (
    <div className='border-gray-300 overflow-hidden shadow rounded-lg border p-4'>
      <h1 className='mb-5 text-sm sm:text-lg font-bold text-gray-700 tracking-wider'>
        {t('changeDetailsTitle')}
      </h1>
      <Form name='registrationForm' onFinish={(values) => mutate(values)}>
        <Form.Item
          name='firstName'
          rules={[
            {
              required: true,
              message: t('requiredFirstName'),
            },
          ]}
        >
          <Input placeholder={t('firstName')} />
        </Form.Item>
        <Form.Item
          name='lastName'
          rules={[
            {
              required: true,
              message: t('requiredLastName'),
            },
          ]}
        >
          <Input placeholder={t('lastName')} />
        </Form.Item>
        <Form.Item
          name='phoneNumber'
          rules={[
            { required: true, message: t('requiredPhoneNumber') },
            {
              pattern: /^\+(?:[0-9]?){6,14}[0-9]$/,
              message: t('validatePhoneNumber'),
            },
          ]}
        >
          <Input placeholder={t('phoneNumber')} />
        </Form.Item>
        <Form.Item
          name='email'
          rules={[
            {
              required: true,
              message: t('requiredEmail'),
            },
            {
              type: 'email',
              message: t('validateEmail'),
            },
          ]}
        >
          <Input placeholder={t('emailAddress')} />
        </Form.Item>
        <Form.Item>
          <Button type='submit'>{t('saveChanges')}</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
