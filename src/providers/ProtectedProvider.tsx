import { PropsWithChildren, useEffect, useState } from 'react';
import { ProtectedContext, TUser_Roles } from 'context/ProtectedContext';
import jwt_decode from 'jwt-decode';

import { TLocalStorage } from 'types/localstorage';

export const ProtectedProvider = ({ children }: PropsWithChildren) => {
  const [pending, setPending] = useState<boolean>(true);
  const [currentRole, setCurrentRole] = useState<TUser_Roles>(
    TUser_Roles.GUEST
  );
  const token = localStorage.getItem(TLocalStorage.ACCESSTOKEN);

  useEffect(() => {
    if (token) {
      const { isAdmin }: { isAdmin: boolean } = jwt_decode(token);
      if (isAdmin) {
        setCurrentRole(TUser_Roles.ADMIN);
      } else {
        setCurrentRole(TUser_Roles.USER);
      }
      setPending(false);
    } else {
      setPending(false);
    }
  }, [status]);

  return (
    <ProtectedContext.Provider value={{ pending, currentRole }}>
      {children}
    </ProtectedContext.Provider>
  );
};
