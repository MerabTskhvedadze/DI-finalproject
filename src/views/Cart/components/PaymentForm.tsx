import { Form, Input, message, Row, Col } from 'antd';
import { Button } from 'components/Button';

export const PaymentForm = () => {
  return (
    <Form
      name='paymentForm'
      onFinish={() => message.success('Payment successful!')}
    >
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            label='Card Number'
            name='cardNumber'
            rules={[
              {
                required: true,
                message: 'Please enter your card number!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label='Expiration Date'
            name='expirationDate'
            rules={[
              {
                required: true,
                message: 'Please enter the expiration date!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
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
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
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
        </Col>
        <Col span={12}>
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
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
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
        </Col>
        <Col span={12}>
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
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
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
        </Col>
      </Row>
      <Form.Item>
        <Button type='submit'>Pay</Button>
      </Form.Item>
    </Form>
  );
};
