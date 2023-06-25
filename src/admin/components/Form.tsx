import { Input, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/Button';
import { TFormValues } from '../types/TFormValues';

type AdminFormProps = {
  handleSubmit: (values: TFormValues) => void;
  initialValues?: TFormValues;
};

export const AdminForm = ({ handleSubmit, initialValues }: AdminFormProps) => {
  const { t } = useTranslation('admin');

  return (
    <Form
      onFinish={handleSubmit}
      labelCol={{ span: 24 }}
      className='w-full'
      initialValues={initialValues}
    >
      <Form.Item
        label={t('amountLabel')}
        name='amount'
        rules={[
          {
            required: true,
            message: t('amountRequiredMessage'),
          },
          {
            pattern: /^\d*\.?\d+$/,
            message: t('amountInvalidMessage'),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('brandLabel')}
        name='brand'
        rules={[
          {
            required: true,
            message: t('brandRequiredMessage'),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('titleLabel')}
        name='title'
        rules={[
          {
            required: true,
            message: t('titleRequiredMessage'),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('categoryLabel')}
        name='category'
        rules={[
          {
            required: true,
            message: t('categoryRequiredMessage'),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('descriptionLabel')}
        name='description'
        rules={[
          {
            required: true,
            message: t('descriptionRequiredMessage'),
          },
        ]}
      >
        <Input.TextArea style={{ minHeight: '150px' }} />
      </Form.Item>
      <Form.Item
        label={t('priceLabel')}
        name='price'
        rules={[
          {
            required: true,
            message: t('priceRequiredMessage'),
          },
          {
            pattern: /^\d*\.?\d+$/,
            message: t('priceInvalidMessage'),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Button type='submit' className='mt-7'>
        {t('save')}
      </Button>
    </Form>
  );
};
