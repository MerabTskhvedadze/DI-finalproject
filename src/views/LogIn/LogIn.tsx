import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { useMutation } from 'react-query';
import { public_axios } from 'utils/public_axios';

import { responseData } from './types/responseData';
import { FormValues } from './types/FormValues';

import { message } from 'antd';
import LoginForm from './components/LoginForm';

export default function LogIn() {
  const [_, setAccessToken] = useLocalStorage<string | null>(
    'accessToken',
    null
  );
  const navigate = useNavigate();

  const loginUser = async (values: FormValues) => {
    const response = await public_axios.post('/login', values);
    return response.data;
  };

  const { mutate } = useMutation(loginUser, {
    onSuccess: (data: responseData) => {
      message.success(`Wellcome back ${data.User.firstName}`);
      setAccessToken(data.AccessToken);
      navigate('/');
    },
    onError: (error: any) => {
      message.error(error.response.data);
    },
  });

  return (
    <>
      <h1 className='mb-5 text-sm sm:text-lg font-bold text-gray-700 tracking-wider'>
        Sign in
      </h1>
      <LoginForm loginUser={mutate} />
    </>
  );
}
