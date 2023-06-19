import { useTranslation } from 'react-i18next';
import { Form, Input, message } from 'antd';
import { Button } from 'components/Button';

export const ContactUsForm = () => {
  const { t } = useTranslation('contact');
  const onFinish = () => message.success('Form submited');

  return (
    <Form name='contact-form' onFinish={onFinish}>
      <Form.Item
        name='name'
        rules={[{ required: true, message: t('requireName') }]}
      >
        <Input placeholder='Name' />
      </Form.Item>

      <Form.Item
        name='email'
        rules={[
          { required: true, message: t('requireEmail') },
          { type: 'email', message: t('validateEmail') },
        ]}
      >
        <Input placeholder='Email' />
      </Form.Item>

      <Form.Item
        name='message'
        rules={[{ required: true, message: t('requireMessage') }]}
      >
        <Input.TextArea placeholder='Message' />
      </Form.Item>

      <Form.Item>
        <Button type='submit'>Submit</Button>
      </Form.Item>
    </Form>
  );
};
