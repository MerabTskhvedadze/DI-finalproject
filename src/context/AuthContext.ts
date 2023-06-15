import { createContext } from 'react';

export enum TAuthorizationStage {
  AUTHORIZED = 'authorized',
  UNAUTHORIZED = 'unauthorized',
}

type AuthContextValue = {
  status: TAuthorizationStage;
  setStatus: React.Dispatch<React.SetStateAction<TAuthorizationStage>>;
  user: any;
};

export const AuthContext = createContext<AuthContextValue>({
  user: undefined,
  status: TAuthorizationStage.UNAUTHORIZED,
  setStatus: () => {},
});
