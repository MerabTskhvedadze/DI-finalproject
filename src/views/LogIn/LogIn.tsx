import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { public_axios } from 'utils/public_axios';
import { TLocalStorage } from 'types/localstorage';
import { AuthContext, TAuthorizationStage } from 'context/AuthContext';

import { responseData } from './types/responseData';
import { FormValues } from './types/FormValues';

import { message } from 'antd';
import { LoginForm } from './components/LoginForm';

export default function LogIn() {
  const navigate = useNavigate();
  const { setStatus } = useContext(AuthContext);

  const loginUser = async (values: FormValues) => {
    const response = await public_axios.post('/login', values);
    return response.data;
  };

  const { mutate } = useMutation(loginUser, {
    onSuccess: (data: responseData) => {
      if (data.AccessToken) {
        localStorage.setItem(TLocalStorage.ACCESSTOKEN, data.AccessToken);
        setStatus(TAuthorizationStage.AUTHORIZED);
      }
      message.success(`Wellcome back`);
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
