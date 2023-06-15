import { createContext, useContext } from 'react';

export enum TAuthorizationStage {
  AUTHORIZED = 'authorized',
  UNAUTHORIZED = 'unauthorized',
}

type AuthContextValues = {
  status: TAuthorizationStage;
  setStatus: React.Dispatch<React.SetStateAction<TAuthorizationStage>>;
};

export const AuthContext = createContext<AuthContextValues | undefined>(
  undefined
);

export const useAuth = (): AuthContextValues => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};
