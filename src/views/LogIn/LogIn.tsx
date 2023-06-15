import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { public_axios } from 'utils/public_axios';
import { TLocalStorage } from 'types/localstorage';

import {
  TAuthorizationStage,
  TUser_Roles,
  useAuthContext,
} from 'context/AuthContext';

import { FormValues } from './types/FormValues';

import { message } from 'antd';
import { LoginForm } from './components/LoginForm';

export default function LogIn() {
  const navigate = useNavigate();
  const { setStatus, setRole } = useAuthContext();

  const loginUser = async (values: FormValues) => {
    const response = await public_axios.post('/login', values);
    return response?.data;
  };

  const { mutate } = useMutation(loginUser, {
    onSuccess: (data: any) => {
      if (data.AccessToken) {
        localStorage.setItem(TLocalStorage.ACCESSTOKEN, data.AccessToken);
        setStatus(TAuthorizationStage.AUTHORIZED);
      }

      // setting user's role on session storage
      if (data?.User?.email) {
        localStorage.setItem(TLocalStorage.ROLE, TUser_Roles.USER);
        setRole(TUser_Roles.USER);
      } else {
        localStorage.setItem(TLocalStorage.ROLE, TUser_Roles.ADMIN);
        setRole(TUser_Roles.ADMIN);
      }

      message.success(`Wellcome back`);
      navigate('/');
    },
    onError: () => {
      message.error('Email or Password is not correct');
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
