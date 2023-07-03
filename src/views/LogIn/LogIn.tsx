import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { public_axios } from 'utils/public_axios';
import { useTranslation } from 'react-i18next';
import { TLocalStorage } from 'types/localstorage';

import { TAuthorizationStage, useAuth } from 'context/AuthContext';

import { FormValues } from './types/FormValues';

import { message } from 'antd';
import { LoginForm } from './components/LoginForm';
import { TUser_Roles, useAccessContext } from 'context/AccessContext';
import jwt_decode from 'jwt-decode';

export default function LogIn() {
  const { t } = useTranslation('login');
  const navigate = useNavigate();
  const { setStatus } = useAuth();
  const { setCurrentRole } = useAccessContext();

  const { mutate } = useMutation(async (values: FormValues) => {
    try {
      const response = await public_axios.post('/login', values);
      if (response.data.AccessToken) {
        localStorage.setItem(
          TLocalStorage.ACCESSTOKEN,
          response.data.AccessToken
        );
        setStatus(TAuthorizationStage.AUTHORIZED);

        const { isAdmin }: { isAdmin: boolean } = jwt_decode(
          response.data.AccessToken
        );
        if (isAdmin) {
          setCurrentRole(TUser_Roles.ADMIN);
        } else {
          setCurrentRole(TUser_Roles.USER);
        }
      }
      message.success(`${t('wellcome')}`);
      navigate('/');
    } catch (error: any) {
      message.error(`${t('error')}`);
    }
  });

  const login = (values: FormValues) => {
    mutate(values);
  };

  return (
    <div className='w-fit mx-auto border border-gray-300 p-5'>
      <h1 className='mb-5 text-sm sm:text-lg font-bold text-gray-700 tracking-wider'>
        {t('signin')}
      </h1>
      <LoginForm login={login} />
    </div>
  );
}
