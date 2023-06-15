import { PropsWithChildren, useEffect, useState } from 'react';
import { AuthContext, TAuthorizationStage } from 'context/AuthContext';

import { TLocalStorage } from 'types/localstorage';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<TAuthorizationStage>(
    TAuthorizationStage.UNAUTHORIZED
  );

  useEffect(() => {
    const token = localStorage.getItem(TLocalStorage.ACCESSTOKEN);
    if (token) {
      setStatus(TAuthorizationStage.AUTHORIZED);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ status, setStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
