import { Form, Input, message } from 'antd';
import { Button } from 'components/Button';
import { useMutation, useQueryClient } from 'react-query';
import { private_axios } from 'utils/private_axios';

export const ChangeDetails = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    async (values) => {
      await private_axios.post('/user', values);
      queryClient.invalidateQueries('profile');
    },
    {
      onSuccess: () => {
        message.success('Saved successfully');
      },
      onError: () => {
        message.error('Oops! something went wrong');
      },
    }
  );

  return (
    <div className='bg-white overflow-hidden shadow rounded-lg border p-4'>
      <h1 className='mb-5 text-sm sm:text-lg font-bold text-gray-700 tracking-wider'>
        Change user details
      </h1>
      <Form name='registrationForm' onFinish={(values) => mutate(values)}>
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
        <Form.Item>
          <Button type='submit'>Save changes</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
