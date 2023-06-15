import { PropsWithChildren, useEffect, useState } from 'react';
import {
  AuthContext,
  TUser_Roles,
  TAuthorizationStage,
} from 'context/AuthContext';

import { TLocalStorage } from 'types/localstorage';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [role, setRole] = useState<TUser_Roles>(TUser_Roles.GUEST);
  const [status, setStatus] = useState<TAuthorizationStage>(
    TAuthorizationStage.UNAUTHORIZED
  );

  useEffect(() => {
    if (localStorage.getItem(TLocalStorage.ACCESSTOKEN)) {
      setStatus(TAuthorizationStage.AUTHORIZED);
    }
    if (localStorage.getItem(TLocalStorage.ROLE)) {
      setRole(localStorage.getItem(TLocalStorage.ROLE) as TUser_Roles);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ status, setStatus, role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};
