import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';

import { public_axios } from 'utils/public_axios';
import { RegistrationForm } from './components/RegistrationForm';
import { FormValues } from './types/FormValues';

export default function Registration() {
  const navigate = useNavigate();
  const { t } = useTranslation('register');

  const { mutate } = useMutation(async (values: FormValues) => {
    try {
      await public_axios.post('/register', values);
      navigate('/login');
      message.success('Registration was successful');
    } catch (error: any) {
      message.error(error?.response?.data);
    }
  });

  const register = (values: FormValues) => {
    mutate(values);
  };

  return (
    <div className='max-w-[400px] mx-auto border border-gray-300 p-5'>
      <h1 className='mb-5 text-sm sm:text-lg font-bold text-gray-700 tracking-wider'>
        {t('register')}
      </h1>
      <RegistrationForm register={register} />
    </div>
  );
}
