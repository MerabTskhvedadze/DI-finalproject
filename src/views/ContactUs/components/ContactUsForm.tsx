import { Form, Input, message } from 'antd';
import { Button } from 'components/Button';

export const ContactUsForm = () => {
  const onFinish = () => message.success('Form submited');

  return (
    <Form name='contact-form' onFinish={onFinish}>
      <Form.Item
        name='name'
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input placeholder='Name' />
      </Form.Item>

      <Form.Item
        name='email'
        rules={[
          { required: true, message: 'Please enter your email address' },
          { type: 'email', message: 'Please enter a valid email address' },
        ]}
      >
        <Input placeholder='Email' />
      </Form.Item>

      <Form.Item
        name='message'
        rules={[{ required: true, message: 'Please enter your message' }]}
      >
        <Input.TextArea placeholder='Message' />
      </Form.Item>

      <Form.Item>
        <Button type='submit'>Submit</Button>
      </Form.Item>
    </Form>
  );
};
