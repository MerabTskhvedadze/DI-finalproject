import { PropsWithChildren, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { private_axios } from 'utils/private_axios';
import { AuthContext, TAuthorizationStage } from 'context/AuthContext';

import { TLocalStorage } from 'types/localstorage';
import { TSessionStorage } from 'types/sessionstorage';
import { TUser_Roles } from 'types/user.types';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<TAuthorizationStage>(
    TAuthorizationStage.UNAUTHORIZED
  );
  const { data: user } = useQuery(
    [status, 'user'],
    async () => {
      const response = await private_axios.get('/me');
      return response?.data;
    },
    {
      enabled: status === TAuthorizationStage.AUTHORIZED,
    }
  );

  useEffect(() => {
    if (localStorage.getItem(TLocalStorage.ACCESSTOKEN)) {
      setStatus(TAuthorizationStage.AUTHORIZED);
    }
    if (!sessionStorage.getItem(TSessionStorage.ROLE)) {
      sessionStorage.setItem(TSessionStorage.ROLE, TUser_Roles.GUEST);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ status, setStatus, user }}>
      {children}
    </AuthContext.Provider>
  );
};
