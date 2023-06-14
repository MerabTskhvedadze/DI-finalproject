import { Form, Input, message } from 'antd';
import { Button } from 'components/Button';

export const PaymentForm = () => {
  const handlePayment = () => {
    setTimeout(() => {
      message.success('Payment successful!');
    }, 1000);
  };

  return (
    <Form name='paymentForm' onFinish={handlePayment}>
      <Form.Item
        label='Card Number'
        name='cardNumber'
        rules={[
          {
            required: true,
            message: 'Please enter your card number!',
          },
          {
            pattern: /^[0-9]{16}$/,
            message: 'Please enter a valid 16-digit card number!',
          },
        ]}
      >
        <Input placeholder='e.g. 1234 5678 9012 3456' />
      </Form.Item>

      <Form.Item
        label='Expiration Date'
        name='expirationDate'
        rules={[
          {
            required: true,
            message: 'Please enter the expiration date!',
          },
          {
            pattern: /^(0[1-9]|1[0-2])\/\d{2}$/,
            message: 'Please enter a valid expiration date (MM/YY)!',
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
        label='Firstname'
        name='firstName'
        rules={[
          {
            required: true,
            message: 'Please enter your firstname!',
          },
        ]}
      >
        <Input placeholder='e.g. John' />
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
        <Input placeholder='e.g. Doe' />
      </Form.Item>

      <Form.Item
        label='Phone Number'
        name='phoneNumber'
        rules={[
          {
            required: true,
            message: 'Please enter your phone number!',
          },
          {
            pattern: /^\+(?:[0-9]?){6,14}[0-9]$/,
            message: 'Please enter a valid phone number',
          },
        ]}
      >
        <Input placeholder='e.g. +1234567890' />
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
        <Input placeholder='e.g. example@example.com' />
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
        <Input.Password placeholder='Enter your password' />
      </Form.Item>

      <Form.Item>
        <Button type='submit'>Pay</Button>
      </Form.Item>
    </Form>
  );
};
