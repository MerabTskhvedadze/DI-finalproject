import { SetStateAction, createContext, useContext } from 'react';

export enum TUser_Roles {
  GUEST = 'guest',
  USER = 'user',
  ADMIN = 'admin',
}

type ProtectedContextValues = {
  pending: boolean;
  currentRole: TUser_Roles;
  setCurrentRole: React.Dispatch<SetStateAction<TUser_Roles>>;
};

export const ProtectedContext = createContext<
  ProtectedContextValues | undefined
>(undefined);

export const useProtectedContext = (): ProtectedContextValues => {
  const context = useContext(ProtectedContext);
  if (!context) {
    throw new Error(
      'useProtectedContext must be used within a ProtectedProvider'
    );
  }
  return context;
};
