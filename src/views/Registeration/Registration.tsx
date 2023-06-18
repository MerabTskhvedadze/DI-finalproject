import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { message } from 'antd';

import { public_axios } from 'utils/public_axios';
import { RegistrationForm } from './components/RegistrationForm';
import { FormValues } from './types/FormValues';

export default function Registration() {
  const navigate = useNavigate();

  const { mutate } = useMutation(
    async (values: FormValues) => {
      await public_axios.post('/register', values);
    },
    {
      onSuccess: () => {
        navigate('/login');
        message.success('Registration was successful');
      },
      onError: (error: any) => {
        message.error(error.response.data);
      },
    }
  );

  const register = (values: FormValues) => {
    mutate(values);
  };

  return (
    <div className='w-fit mx-auto border border-gray-300 p-5'>
      <h1 className='mb-5 text-sm sm:text-lg font-bold text-gray-700 tracking-wider'>
        Sign Up
      </h1>
      <RegistrationForm register={register} />
    </div>
  );
}
