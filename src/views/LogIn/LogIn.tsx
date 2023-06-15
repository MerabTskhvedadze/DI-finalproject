import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { public_axios } from 'utils/public_axios';
import { TLocalStorage } from 'types/localstorage';

import { TAuthorizationStage, useAuth } from 'context/AuthContext';

import { FormValues } from './types/FormValues';

import { message } from 'antd';
import { LoginForm } from './components/LoginForm';
import { TUser_Roles, useProtectedContext } from 'context/ProtectedContext';
import jwt_decode from 'jwt-decode';

export default function LogIn() {
  const navigate = useNavigate();
  const { setStatus } = useAuth();
  const { setCurrentRole } = useProtectedContext();

  const { mutate } = useMutation(
    async (values: FormValues) => {
      const response = await public_axios.post('/login', values);
      return response?.data;
    },
    {
      onSuccess: (data: any) => {
        if (data.AccessToken) {
          localStorage.setItem(TLocalStorage.ACCESSTOKEN, data.AccessToken);
          setStatus(TAuthorizationStage.AUTHORIZED);

          const { isAdmin }: { isAdmin: boolean } = jwt_decode(
            data.AccessToken
          );
          if (isAdmin) {
            setCurrentRole(TUser_Roles.ADMIN);
          } else {
            setCurrentRole(TUser_Roles.USER);
          }
        }
        message.success(`Wellcome back`);
        navigate('/');
      },
      onError: () => {
        message.error('Email or Password is not correct');
      },
    }
  );

  const login = (values: FormValues) => {
    mutate(values);
  };

  return (
    <>
      <h1 className='mb-5 text-sm sm:text-lg font-bold text-gray-700 tracking-wider'>
        Sign in
      </h1>
      <LoginForm login={login} />
    </>
  );
}
