import { useTranslation } from 'react-i18next';
import { Form, Input, message } from 'antd';
import { Button } from 'components/Button';

export default function Checkout() {
  const { t } = useTranslation('checkout');
  const handlePayment = () => {
    message.success('Payment successful!');
  };

  return (
    <div className='max-w-[400px] mx-auto p-4 border rounded-lg'>
      <Form name='paymentForm' onFinish={handlePayment}>
        <Form.Item
          label={t('cardNum')}
          name='cardNumber'
          rules={[
            {
              required: true,
              message: t('requireNum'),
            },
            {
              pattern: /^[0-9]{16}$/,
              message: t('validateNum'),
            },
          ]}
        >
          <Input placeholder='e.g. 1234 5678 9012 3456' />
        </Form.Item>

        <Form.Item
          label={t('expDate')}
          name='expirationDate'
          rules={[
            {
              required: true,
              message: t('requireExpData'),
            },
            {
              pattern: /^(0[1-9]|1[0-2])\/\d{2}$/,
              message: t('validateExpDate'),
            },
          ]}
        >
          <Input placeholder='e.g. 12/23' />
        </Form.Item>

        <Form.Item
          label='CVV'
          name='cvv'
          rules={[
            {
              required: true,
              message: 'Please enter the CVV!',
            },
          ]}
        >
          <Input placeholder='e.g. 123' />
        </Form.Item>

        <Form.Item
          label={t('firstName')}
          name='firstName'
          rules={[
            {
              required: true,
              message: t('requireFirstName'),
            },
          ]}
        >
          <Input placeholder='e.g. John' />
        </Form.Item>

        <Form.Item
          label={t('lastName')}
          name='lastName'
          rules={[
            {
              required: true,
              message: t('requireLastName'),
            },
          ]}
        >
          <Input placeholder='e.g. Doe' />
        </Form.Item>

        <Form.Item
          label={t('phoneNumber')}
          name='phoneNumber'
          rules={[
            {
              required: true,
              message: t('requirePhoneNumber'),
            },
            {
              pattern: /^\+(?:[0-9]?){6,14}[0-9]$/,
              message: t('validatePhoneNumber'),
            },
          ]}
        >
          <Input placeholder='e.g. +1234567890' />
        </Form.Item>

        <Form.Item
          label={t('email')}
          name='email'
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
          <Input placeholder='e.g. example@example.com' />
        </Form.Item>

        <Form.Item
          label={t('password')}
          name='password'
          rules={[
            {
              required: true,
              message: t('requirePassword'),
            },
            {
              min: 6,
              message: t('validatePassword'),
            },
          ]}
        >
          <Input.Password placeholder='Enter your password' />
        </Form.Item>

        <Form.Item>
          <Button type='submit'>{t('pay')}</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
