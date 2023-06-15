import { createContext, useContext } from 'react';

export enum TAuthorizationStage {
  AUTHORIZED = 'authorized',
  UNAUTHORIZED = 'unauthorized',
}
export enum TUser_Roles {
  GUEST = 'guest',
  USER = 'user',
  ADMIN = 'admin',
}

type AuthContextValue = {
  status: TAuthorizationStage;
  setStatus: React.Dispatch<React.SetStateAction<TAuthorizationStage>>;
  role: TUser_Roles;
  setRole: React.Dispatch<React.SetStateAction<TUser_Roles>>;
};

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);

export const useAuthContext = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};
